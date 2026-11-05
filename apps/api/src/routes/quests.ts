import { Router } from 'express';
import { z } from 'zod';
import { countWords, gradeQuiz, type Curriculum, type Quest } from '@sbq/curriculum';
import type { ChapterDetail, ChapterSummary, Curriculum as CurriculumResponse, QuestDetail, QuestStatus, QuestSummary, QuizResult, ResumeTarget, SearchResult, TrackSummary } from '@sbq/shared';
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
const MAX_DOC_LENGTH = 30_000;
const DesignBody = z.object({ document: z.string().max(MAX_DOC_LENGTH) });
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
    trackSlug: quest.trackSlug,
    chapterSlug: quest.chapterSlug,
    title: quest.title,
    type: quest.type,
    language: quest.language,
    xp: quest.xp,
    boss: quest.boss,
    optional: quest.optional,
    ...(quest.section ? { section: quest.section } : {}),
    status,
  };
}

type StatusRow = { questSlug: string; status: 'IN_PROGRESS' | 'COMPLETED' };

export function questsRouter(db: Db, curriculum: Curriculum, progress: ProgressService) {
  const router = Router();

  const findQuest = (slug: unknown): Quest => {
    const quest = typeof slug === 'string' ? curriculum.bySlug.get(slug) : undefined;
    if (!quest) throw notFound('Quest');
    return quest;
  };

  // Prev/next links stay inside the quest's own track.
  const link = (from: Quest, q: Quest | undefined) =>
    q && q.trackSlug === from.trackSlug ? { slug: q.slug, chapterSlug: q.chapterSlug, title: q.title } : null;

  const statusMap = async (userId: string | undefined): Promise<Map<string, StatusRow>> => {
    if (!userId) return new Map();
    const rows = await db.questProgress.findMany({ where: { userId }, select: { questSlug: true, status: true } });
    return new Map(rows.map((r) => [r.questSlug, r]));
  };

  const chapterSummary = (c: Curriculum['chapters'][number], statuses: Map<string, StatusRow>): ChapterSummary => {
    const quests = c.quests.map((q) => summary(q, toStatus(statuses.get(q.slug))));
    const core = quests.filter((q) => !q.optional);
    const pending = core.filter((q) => q.status !== 'completed');
    return {
      slug: c.slug,
      trackSlug: c.trackSlug,
      number: c.number,
      title: c.title,
      description: c.description,
      coreTotal: core.length,
      coreCompleted: core.length - pending.length,
      total: quests.length,
      completed: quests.filter((q) => q.status === 'completed').length,
      xp: quests.reduce((sum, q) => sum + q.xp, 0),
      next: pending[0] ?? null,
      preview: (pending.length ? pending : core).slice(0, 5),
    };
  };

  /**
   * The overview is deliberately small: chapters with counts and a short
   * preview, not every quest. With thousands of quests the full list would be
   * megabytes; each chapter's quests come from /chapters/:slug instead.
   */
  router.get('/curriculum', async (req, res) => {
    const statuses = await statusMap(req.userId);
    const tracks: TrackSummary[] = curriculum.tracks.map((t) => ({
      slug: t.slug,
      number: t.number,
      title: t.title,
      description: t.description,
      icon: t.icon,
      chapters: t.chapters.map((c) => chapterSummary(c, statuses)),
    }));
    let resume: ResumeTarget | null = null;
    if (req.userId) {
      // Continue where you left off: the most recently touched unfinished quest,
      // else the next core quest after the most recently completed one.
      const latest = await db.questProgress.findFirst({ where: { userId: req.userId }, orderBy: { updatedAt: 'desc' } });
      const quest = latest ? curriculum.bySlug.get(latest.questSlug) : undefined;
      if (quest && latest!.status === 'IN_PROGRESS') {
        resume = { slug: quest.slug, chapterSlug: quest.chapterSlug, title: quest.title, reason: 'in_progress' };
      } else {
        const trackSlug = quest?.trackSlug ?? curriculum.tracks[0]?.slug;
        const next = curriculum.quests.find((q) => q.trackSlug === trackSlug && !q.optional && statuses.get(q.slug)?.status !== 'COMPLETED');
        if (next) resume = { slug: next.slug, chapterSlug: next.chapterSlug, title: next.title, reason: 'next' };
      }
    }
    const body: CurriculumResponse = { tracks, totalXp: curriculum.totalXp, totalQuests: curriculum.quests.length, resume };
    res.json(body);
  });

  router.get('/chapters/:slug', async (req, res) => {
    const chapter = curriculum.chapters.find((c) => c.slug === req.params.slug);
    if (!chapter) throw notFound('Chapter');
    const statuses = await statusMap(req.userId);
    const { next: _next, preview: _preview, ...counts } = chapterSummary(chapter, statuses);
    const detail: ChapterDetail = {
      ...counts,
      intro: chapter.intro,
      quests: chapter.quests.map((q) => summary(q, toStatus(statuses.get(q.slug)))),
    };
    res.json(detail);
  });

  const searchIndex = curriculum.quests.map((q) => ({
    quest: q,
    haystack: `${q.title} ${q.slug} ${q.chapterTitle} ${q.section ?? ''}`.toLowerCase(),
    trackTitle: curriculum.tracks.find((t) => t.slug === q.trackSlug)?.title ?? '',
  }));

  /** Search quest titles across every track. Every word must match. */
  router.get('/search', async (req, res) => {
    const q = typeof req.query.q === 'string' ? req.query.q.trim().toLowerCase().slice(0, 100) : '';
    const words = q.split(/\s+/).filter(Boolean);
    if (words.length === 0) {
      res.json({ results: [] });
      return;
    }
    const matches = searchIndex.filter((e) => words.every((w) => e.haystack.includes(w)));
    // Titles that start with the query rank first; core before practice.
    matches.sort((a, b) => Number(!a.quest.title.toLowerCase().startsWith(words[0]!)) - Number(!b.quest.title.toLowerCase().startsWith(words[0]!)) || Number(a.quest.optional) - Number(b.quest.optional) || a.quest.index - b.quest.index);
    const top = matches.slice(0, 30);
    const statuses = await statusMap(req.userId);
    const results: SearchResult[] = top.map((e) => ({ ...summary(e.quest, toStatus(statuses.get(e.quest.slug))), chapterTitle: e.quest.chapterTitle, trackTitle: e.trackTitle }));
    res.json({ results, total: matches.length });
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
      prev: link(quest, curriculum.quests[quest.index - 1]),
      next: link(quest, curriculum.quests[quest.index + 1]),
    };
    if (quest.type === 'code') {
      detail.starter = quest.starter;
      detail.code = row?.code ?? quest.starter;
      detail.tests = quest.tests;
      detail.setup = quest.setup;
      detail.mode = quest.mode;
      if (quest.mode === 'write-tests') {
        // Runs in the learner's browser, so the mutants have to be sent too
        // (same honor-system trade-off as code quests: see BUILDING.md step 3).
        detail.subject = quest.subject;
        detail.mutants = quest.mutants;
      }
    }
    if (quest.type === 'quiz') {
      // Never send the answers to the client — quizzes are graded on the server.
      detail.questions = quest.questions!.map((q) => ({ prompt: q.prompt, options: q.options }));
    }
    if (quest.type === 'project') detail.requirements = quest.requirements;
    if (quest.type === 'design') {
      detail.rubric = quest.rubric;
      detail.minWords = quest.minWords;
      detail.template = quest.template;
      detail.code = row?.code ?? quest.template;
      // The reference design is only revealed after submitting (via /solution).
      detail.solutionAvailable = status === 'completed';
    }
    res.json(detail);
  });

  router.get('/quests/:slug/solution', requireAuth, async (req, res) => {
    const quest = findQuest(req.params.slug);
    if (quest.type === 'design') {
      const done = await db.questProgress.findFirst({ where: { userId: req.userId!, questSlug: quest.slug, status: 'COMPLETED' } });
      if (!done) throw new HttpError(403, 'Submit your own design first, then compare it with the reference');
      res.json({ solution: quest.reference });
      return;
    }
    if (quest.type !== 'code') throw new HttpError(400, 'Only code quests and design write-ups have solutions');
    const row = await db.questProgress.findUnique({ where: { userId_questSlug: { userId: req.userId!, questSlug: quest.slug } } });
    const unlocked = row && (row.status === 'COMPLETED' || row.attempts >= ATTEMPTS_BEFORE_SOLUTION);
    if (!unlocked) throw new HttpError(403, `Solutions unlock after ${ATTEMPTS_BEFORE_SOLUTION} attempts`);
    res.json({ solution: quest.solution });
  });

  router.put('/quests/:slug/draft', requireAuth, async (req, res) => {
    const quest = findQuest(req.params.slug);
    if (quest.type !== 'code' && quest.type !== 'design') throw new HttpError(400, 'This quest has no drafts');
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
    const total = correct.length;
    const allCorrect = score === total;

    // Only the score is revealed until every answer is right. Returning which
    // questions were wrong would let anyone enumerate the answer key in a few
    // submissions (see docs/COUNCIL.md). Once passed, every explanation is shown.
    const result: QuizResult = allCorrect
      ? { ...(await progress.complete(req.userId!, quest)), correct, score, total }
      : { completed: false, alreadyCompleted: false, xpAwarded: 0, user: null, newAchievements: [], correct: null, score, total };
    if (!allCorrect) await progress.recordAttempt(req.userId!, quest);
    res.json({ ...result, explanations: allCorrect ? quest.questions!.map((q) => q.explanation ?? null) : null });
  });

  /**
   * Design write-ups are self-assessed against a rubric (like a design review
   * with yourself). The server only enforces a minimum length, so learners
   * can't skip the thinking by submitting an empty document.
   */
  router.post('/quests/:slug/design', requireAuth, async (req, res) => {
    const quest = findQuest(req.params.slug);
    if (quest.type !== 'design') throw new HttpError(400, 'This quest is not a design write-up');
    const { document } = parse(DesignBody, req.body);
    const words = countWords(document);
    const minWords = quest.minWords ?? 150;
    if (words < minWords) {
      throw new HttpError(400, `Your design needs at least ${minWords} words (it has ${words})`, { document: `At least ${minWords} words` });
    }
    res.json(await progress.complete(req.userId!, quest, { code: document }));
  });

  router.post('/quests/:slug/project', requireAuth, async (req, res) => {
    const quest = findQuest(req.params.slug);
    if (quest.type !== 'project') throw new HttpError(400, 'This quest is not a project');
    const body = parse(ProjectBody, req.body);
    res.json(await progress.complete(req.userId!, quest, body));
  });

  return router;
}
