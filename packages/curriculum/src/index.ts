import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { z } from 'zod';
import type { CodeLanguage, QuestType } from '@sbq/shared';

export interface QuizQuestion {
  prompt: string;
  options: string[];
  answer: number;
  explanation?: string;
}

export interface Quest {
  slug: string;
  chapterSlug: string;
  chapterTitle: string;
  title: string;
  type: QuestType;
  language?: CodeLanguage;
  xp: number;
  boss: boolean;
  lesson: string;
  starter?: string;
  tests?: string;
  solution?: string;
  setup?: string;
  questions?: QuizQuestion[];
  requirements?: string[];
  /** Position of the quest in the whole curriculum (0-based). */
  index: number;
  dir: string;
}

export interface Chapter {
  slug: string;
  number: number;
  title: string;
  description: string;
  intro: string;
  quests: Quest[];
}

export interface Curriculum {
  chapters: Chapter[];
  quests: Quest[];
  bySlug: Map<string, Quest>;
  totalXp: number;
}

const chapterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const questionSchema = z.object({
  prompt: z.string().min(1),
  options: z.array(z.string().min(1)).min(2),
  answer: z.number().int().nonnegative(),
  explanation: z.string().optional(),
});

const questSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'slug must be kebab-case'),
  title: z.string().min(1),
  type: z.enum(['code', 'quiz', 'project']),
  language: z.enum(['js', 'ts', 'jsx', 'sql']).optional(),
  xp: z.number().int().positive(),
  boss: z.boolean().default(false),
  questions: z.array(questionSchema).optional(),
  requirements: z.array(z.string().min(1)).optional(),
});

export class ContentError extends Error {}

const ORDERED_DIR = /^(\d+)-([a-z0-9-]+)$/;

/** Default location: <repo>/content/chapters. */
export function defaultContentDir(): string {
  const here = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(here, '../../../content/chapters');
}

function orderedDirs(dir: string): { name: string; number: number; slug: string; full: string }[] {
  return readdirSync(dir)
    .filter((name) => statSync(path.join(dir, name)).isDirectory())
    .map((name) => {
      const m = ORDERED_DIR.exec(name);
      if (!m) throw new ContentError(`Directory "${path.join(dir, name)}" must be named like "01-some-slug"`);
      return { name, number: Number(m[1]), slug: m[2]!, full: path.join(dir, name) };
    })
    .sort((a, b) => a.number - b.number);
}

function readOptional(dir: string, base: string): string | undefined {
  const file = readdirSync(dir).find((f) => f.startsWith(`${base}.`));
  return file ? readFileSync(path.join(dir, file), 'utf8') : undefined;
}

function where(file: string, err: z.ZodError): string {
  return `${file}: ${err.issues.map((i) => `${i.path.join('.') || '(root)'} ${i.message}`).join('; ')}`;
}

export function loadCurriculum(contentDir = defaultContentDir()): Curriculum {
  if (!existsSync(contentDir)) throw new ContentError(`Content directory not found: ${contentDir}`);
  const chapters: Chapter[] = [];
  const quests: Quest[] = [];
  const bySlug = new Map<string, Quest>();

  for (const chapterDir of orderedDirs(contentDir)) {
    const chapterFile = path.join(chapterDir.full, 'chapter.md');
    if (!existsSync(chapterFile)) throw new ContentError(`Missing ${chapterFile}`);
    const parsed = matter(readFileSync(chapterFile, 'utf8'));
    const meta = chapterSchema.safeParse(parsed.data);
    if (!meta.success) throw new ContentError(where(chapterFile, meta.error));

    const chapter: Chapter = {
      slug: chapterDir.slug,
      number: chapterDir.number,
      title: meta.data.title,
      description: meta.data.description,
      intro: parsed.content.trim(),
      quests: [],
    };

    for (const questDir of orderedDirs(chapterDir.full)) {
      const questFile = path.join(questDir.full, 'quest.md');
      if (!existsSync(questFile)) throw new ContentError(`Missing ${questFile}`);
      const q = matter(readFileSync(questFile, 'utf8'));
      const result = questSchema.safeParse(q.data);
      if (!result.success) throw new ContentError(where(questFile, result.error));
      const data = result.data;

      if (bySlug.has(data.slug)) throw new ContentError(`${questFile}: duplicate quest slug "${data.slug}"`);

      const quest: Quest = {
        slug: data.slug,
        chapterSlug: chapter.slug,
        chapterTitle: chapter.title,
        title: data.title,
        type: data.type,
        language: data.language,
        xp: data.xp,
        boss: data.boss,
        lesson: q.content.trim(),
        index: quests.length,
        dir: questDir.full,
      };

      if (data.type === 'code') {
        if (!data.language) throw new ContentError(`${questFile}: code quests need a language`);
        quest.starter = readOptional(questDir.full, 'starter') ?? '';
        quest.tests = readOptional(questDir.full, 'tests');
        quest.solution = readOptional(questDir.full, 'solution');
        quest.setup = readOptional(questDir.full, 'setup');
        if (!quest.tests) throw new ContentError(`${questFile}: code quests need a tests file`);
        if (!quest.solution) throw new ContentError(`${questFile}: code quests need a solution file`);
        if (data.language === 'sql' && !quest.setup) throw new ContentError(`${questFile}: SQL quests need setup.sql`);
      } else if (data.type === 'quiz') {
        if (!data.questions?.length) throw new ContentError(`${questFile}: quizzes need questions`);
        data.questions.forEach((question, i) => {
          if (question.answer >= question.options.length) {
            throw new ContentError(`${questFile}: question ${i + 1} answer index is out of range`);
          }
        });
        quest.questions = data.questions;
      } else {
        if (!data.requirements?.length) throw new ContentError(`${questFile}: projects need requirements`);
        quest.requirements = data.requirements;
      }

      chapter.quests.push(quest);
      quests.push(quest);
      bySlug.set(quest.slug, quest);
    }
    if (chapter.quests.length === 0) throw new ContentError(`${chapterDir.full}: chapter has no quests`);
    chapters.push(chapter);
  }

  return { chapters, quests, bySlug, totalXp: quests.reduce((sum, q) => sum + q.xp, 0) };
}

/** Grade quiz answers. Returns which answers were correct. */
export function gradeQuiz(quest: Quest, answers: number[]): boolean[] {
  return (quest.questions ?? []).map((q, i) => answers[i] === q.answer);
}
