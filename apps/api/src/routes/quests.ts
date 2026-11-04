import { Router } from 'express';
import { z } from 'zod';
import { gradeQuiz, type Curriculum, type Quest } from '@sbq/curriculum';
import type { ChapterSummary, QuestDetail, QuestStatus, QuestSummary, QuizResult } from '@sbq/shared';
import type { Db } from '../db.ts';
import { requireAuth } from '../auth.ts';
import { HttpError, notFound, parse } from '../errors.ts';
import { ATTEMPTS_BEFORE_SOLUTION, type ProgressService } from '../services/progress.ts';

const MAX_CODE_LENGTH = 50_000;

const SubmissionBody = z.object({
  code: z.string().max(MAX_CODE_LENGTH),
  passed: z.boolean(),
});
const DraftBody = z.object({ code: z.string().max(MAX_CODE_LENGTH) });
const QuizBody = z.object({ answers: z.array(z.number().int().min(0)).max(50) });
const ProjectBody = z.object({
  repoUrl: z.string().trim().url('Must be a valid URL').max(500),
  liveUrl: z
    .string()
    .trim()
    .max(500)
    .optional()
    .transform((v) => (v ? v : undefined))
    .pipe(z.string().url('Must be a valid URL').optional()),
});

function toStatus(row: { status: 'IN_PROGRESS' | 'COMPLETED' } | undefined): QuestStatus {
  if (!row) return 'not_started';
  return row.status === 'COMPLETED' ? 'completed' : 'in_progress';
}

function summary(quest: Quest, status: QuestStatus): QuestSummary {
  return {
    slug: quest.slug,
    chapterSlug: quest.chapterSlug,
    title: quest.title,
    type: quest.type,
    language: quest.language,
    xp: quest.xp,
    boss: quest.boss,
    status,
  };
}

export function questsRouter(db: Db, curriculum: Curriculum, progress: ProgressService) {
  const router = Router();

  const findQuest = (slug: unknown): Quest => {
    const quest = typeof slug === 'string' ? curriculum.bySlug.get(slug) : undefined;
    if (!quest) throw notFound('Quest');
    return quest;
  };

  const link = (q: Quest | undefined) => (q ? { slug: q.slug, chapterSlug: q.chapterSlug, title: q.title } : null);

  router.get('/curriculum', async (req, res) => {
    const rows = req.userId
      ? await db.questProgress.findMany({ where: { userId: req.userId }, select: { questSlug: true, status: true } })
      : [];
    const bySlug = new Map(rows.map((r) => [r.questSlug, r]));
    const chapters: ChapterSummary[] = curriculum.chapters.map((c) => ({
      slug: c.slug,
      number: c.number,
      title: c.title,
      description: c.description,
      quests: c.quests.map((q) => summary(q, toStatus(bySlug.get(q.slug)))),
    }));
    res.json({ chapters, totalXp: curriculum.totalXp });
  });

  router.get('/chapters/:slug', (req, res) => {
    const chapter = curriculum.chapters.find((c) => c.slug === req.params.slug);
    if (!chapter) throw notFound('Chapter');
    res.json({ slug: chapter.slug, number: chapter.number, title: chapter.title, description: chapter.description, intro: chapter.intro });
  });

  router.get('/quests/:slug', async (req, res) => {
    const quest = findQuest(req.params.slug);
    const row = req.userId
      ? await db.questProgress.findUnique({ where: { userId_questSlug: { userId: req.userId, questSlug: quest.slug } } })
      : null;
    const status = toStatus(row ?? undefined);
    const attempts = row?.attempts ?? 0;

    const detail: QuestDetail = {
      ...summary(quest, status),
      chapterTitle: quest.chapterTitle,
      lesson: quest.lesson,
      hints: quest.hints,
      resources: quest.resources,
      attempts,
      solutionAvailable: status === 'completed' || attempts >= ATTEMPTS_BEFORE_SOLUTION,
      repoUrl: row?.repoUrl ?? null,
      liveUrl: row?.liveUrl ?? null,
      prev: link(curriculum.quests[quest.index - 1]),
      next: link(curriculum.quests[quest.index + 1]),
    };
    if (quest.type === 'code') {
      detail.starter = quest.starter;
      detail.code = row?.code ?? quest.starter;
      detail.tests = quest.tests;
      detail.setup = quest.setup;
    }
    if (quest.type === 'quiz') {
      // Never send the answers to the client — quizzes are graded on the server.
      detail.questions = quest.questions!.map((q) => ({ prompt: q.prompt, options: q.options }));
    }
    if (quest.type === 'project') detail.requirements = quest.requirements;
    res.json(detail);
  });

  router.get('/quests/:slug/solution', requireAuth, async (req, res) => {
    const quest = findQuest(req.params.slug);
    if (quest.type !== 'code') throw new HttpError(400, 'Only code quests have solutions');
    const row = await db.questProgress.findUnique({ where: { userId_questSlug: { userId: req.userId!, questSlug: quest.slug } } });
    const unlocked = row && (row.status === 'COMPLETED' || row.attempts >= ATTEMPTS_BEFORE_SOLUTION);
    if (!unlocked) throw new HttpError(403, `Solutions unlock after ${ATTEMPTS_BEFORE_SOLUTION} attempts`);
    res.json({ solution: quest.solution });
  });

  router.put('/quests/:slug/draft', requireAuth, async (req, res) => {
    const quest = findQuest(req.params.slug);
    if (quest.type !== 'code') throw new HttpError(400, 'Only code quests have drafts');
    const { code } = parse(DraftBody, req.body);
    await progress.saveDraft(req.userId!, quest, code);
    res.status(204).end();
  });

  /**
   * Code quests run in the learner's browser (see packages/runner), so the
   * client reports whether the tests passed. This is an honor system by
   * design — see BUILDING.md, step 3.
   */
  router.post('/quests/:slug/submissions', requireAuth, async (req, res) => {
    const quest = findQuest(req.params.slug);
    if (quest.type !== 'code') throw new HttpError(400, 'This quest is not a code quest');
    const body = parse(SubmissionBody, req.body);
    if (!body.passed) {
      const attempt = await progress.recordAttempt(req.userId!, quest, body.code);
      res.json({ completed: false, alreadyCompleted: false, xpAwarded: 0, user: null, newAchievements: [], ...attempt });
      return;
    }
    res.json(await progress.complete(req.userId!, quest, { code: body.code }));
  });

  router.post('/quests/:slug/quiz', requireAuth, async (req, res) => {
    const quest = findQuest(req.params.slug);
    if (quest.type !== 'quiz') throw new HttpError(400, 'This quest is not a quiz');
    const { answers } = parse(QuizBody, req.body);
    const correct = gradeQuiz(quest, answers);
    const score = correct.filter(Boolean).length;
    const allCorrect = score === correct.length;

    const result: QuizResult = allCorrect
      ? { ...(await progress.complete(req.userId!, quest)), correct, score }
      : { ...{ completed: false, alreadyCompleted: false, xpAwarded: 0, user: null, newAchievements: [] }, correct, score };
    if (!allCorrect) await progress.recordAttempt(req.userId!, quest);
    // Explanations are revealed for the questions the learner got right.
    res.json({ ...result, explanations: quest.questions!.map((q, i) => (correct[i] ? (q.explanation ?? null) : null)) });
  });

  router.post('/quests/:slug/project', requireAuth, async (req, res) => {
    const quest = findQuest(req.params.slug);
    if (quest.type !== 'project') throw new HttpError(400, 'This quest is not a project');
    const body = parse(ProjectBody, req.body);
    res.json(await progress.complete(req.userId!, quest, body));
  });

  return router;
}
