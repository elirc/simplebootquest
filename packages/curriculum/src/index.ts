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
  trackSlug: string;
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
  /** Code quests: 'implement' (default) or 'write-tests' (graded by mutation testing). */
  mode?: 'implement' | 'write-tests';
  /** write-tests: the correct implementation the learner writes tests for. */
  subject?: string;
  /** write-tests: buggy copies of the subject that good tests must catch. */
  mutants?: { name: string; code: string }[];
  /** Design write-ups: the self-assessment checklist. */
  rubric?: string[];
  /** Design write-ups: the starting document shown in the editor. */
  template?: string;
  /** Design write-ups: a model answer, revealed after submission. */
  reference?: string;
  /** Design write-ups: minimum words before the doc can be submitted. */
  minWords?: number;
  /** Progressive hints, revealed one at a time in the UI. */
  hints?: string[];
  /** Further reading. */
  resources?: Resource[];
  /** Position of the quest in the whole curriculum (0-based). Tracks are concatenated in order. */
  index: number;
  dir: string;
}

export interface Resource {
  title: string;
  url: string;
}

export interface Chapter {
  slug: string;
  trackSlug: string;
  number: number;
  title: string;
  description: string;
  intro: string;
  quests: Quest[];
}

export interface Track {
  slug: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  intro: string;
  chapters: Chapter[];
}

export interface Curriculum {
  tracks: Track[];
  /** Every chapter of every track, in order. */
  chapters: Chapter[];
  quests: Quest[];
  bySlug: Map<string, Quest>;
  totalXp: number;
}

const trackSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1).default('📘'),
});

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
  type: z.enum(['code', 'quiz', 'project', 'design']),
  language: z.enum(['js', 'ts', 'jsx', 'sql']).optional(),
  mode: z.enum(['implement', 'write-tests']).optional(),
  xp: z.number().int().positive(),
  boss: z.boolean().default(false),
  questions: z.array(questionSchema).optional(),
  requirements: z.array(z.string().min(1)).optional(),
  rubric: z.array(z.string().min(1)).optional(),
  minWords: z.number().int().positive().optional(),
  hints: z.array(z.string().min(1)).optional(),
  resources: z.array(z.object({ title: z.string().min(1), url: z.string().url() })).optional(),
});

export class ContentError extends Error {}

const ORDERED_DIR = /^(\d+)-([a-z0-9-]+)$/;

/**
 * Default location: <repo>/content/tracks. Searches upward from this module
 * and from the working directory, so it works both from source and from a
 * bundled build (where this file lives somewhere else).
 */
export function defaultContentDir(): string {
  const starts = [path.dirname(fileURLToPath(import.meta.url)), process.cwd()];
  for (const start of starts) {
    let dir = start;
    for (;;) {
      const candidate = path.join(dir, 'content', 'tracks');
      if (existsSync(candidate)) return candidate;
      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
  }
  return path.resolve(starts[0]!, '../../../content/tracks');
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

function readMeta<T extends z.ZodTypeAny>(file: string, schema: T): { data: z.infer<T>; content: string } {
  if (!existsSync(file)) throw new ContentError(`Missing ${file}`);
  const parsed = matter(readFileSync(file, 'utf8'));
  const result = schema.safeParse(parsed.data);
  if (!result.success) throw new ContentError(where(file, result.error));
  return { data: result.data, content: parsed.content.trim() };
}

/** mutant-1.js, mutant-2.js… Each starts with a comment naming the bug: `// mutant: off-by-one`. */
function readMutants(dir: string, questFile: string): { name: string; code: string }[] {
  return readdirSync(dir)
    .filter((f) => /^mutant-\d+\./.test(f))
    .sort((a, b) => Number(a.match(/\d+/)![0]) - Number(b.match(/\d+/)![0]))
    .map((f) => {
      const code = readFileSync(path.join(dir, f), 'utf8');
      const name = /^\s*\/\/\s*mutant:\s*(.+)$/m.exec(code)?.[1]?.trim();
      if (!name) throw new ContentError(`${questFile}: ${f} must start with a "// mutant: <description>" comment`);
      return { name, code };
    });
}

function readOptional(dir: string, base: string): string | undefined {
  const file = readdirSync(dir).find((f) => f.startsWith(`${base}.`));
  return file ? readFileSync(path.join(dir, file), 'utf8') : undefined;
}

function where(file: string, err: z.ZodError): string {
  return `${file}: ${err.issues.map((i) => `${i.path.join('.') || '(root)'} ${i.message}`).join('; ')}`;
}

export function loadCurriculum(contentDir: string = defaultContentDir()): Curriculum {
  if (!existsSync(contentDir)) throw new ContentError(`Content directory not found: ${contentDir}`);
  const tracks: Track[] = [];
  const chapters: Chapter[] = [];
  const quests: Quest[] = [];
  const bySlug = new Map<string, Quest>();
  const chapterSlugs = new Set<string>();

  for (const trackDir of orderedDirs(contentDir)) {
    const trackMeta = readMeta(path.join(trackDir.full, 'track.md'), trackSchema);
    const track: Track = {
      slug: trackDir.slug,
      number: trackDir.number,
      title: trackMeta.data.title,
      description: trackMeta.data.description,
      icon: trackMeta.data.icon,
      intro: trackMeta.content,
      chapters: [],
    };

    for (const chapterDir of orderedDirs(trackDir.full)) {
      const chapterFile = path.join(chapterDir.full, 'chapter.md');
      const meta = readMeta(chapterFile, chapterSchema);
      // Chapter slugs appear in URLs (/learn/:chapter), so they must be unique across tracks.
      if (chapterSlugs.has(chapterDir.slug)) throw new ContentError(`${chapterFile}: duplicate chapter slug "${chapterDir.slug}"`);
      chapterSlugs.add(chapterDir.slug);

      const chapter: Chapter = {
        slug: chapterDir.slug,
        trackSlug: track.slug,
        number: chapterDir.number,
        title: meta.data.title,
        description: meta.data.description,
        intro: meta.content,
        quests: [],
      };

      for (const questDir of orderedDirs(chapterDir.full)) {
        const questFile = path.join(questDir.full, 'quest.md');
        const { data, content } = readMeta(questFile, questSchema);
        if (bySlug.has(data.slug)) throw new ContentError(`${questFile}: duplicate quest slug "${data.slug}"`);

        const quest: Quest = {
          slug: data.slug,
          trackSlug: track.slug,
          chapterSlug: chapter.slug,
          chapterTitle: chapter.title,
          title: data.title,
          type: data.type,
          language: data.language,
          xp: data.xp,
          boss: data.boss,
          lesson: content,
          hints: data.hints,
          resources: data.resources,
          index: quests.length,
          dir: questDir.full,
        };

        if (data.type === 'code') {
          if (!data.language) throw new ContentError(`${questFile}: code quests need a language`);
          quest.mode = data.mode ?? 'implement';
          quest.starter = readOptional(questDir.full, 'starter') ?? '';
          quest.tests = readOptional(questDir.full, 'tests');
          quest.solution = readOptional(questDir.full, 'solution');
          quest.setup = readOptional(questDir.full, 'setup');
          if (quest.mode === 'write-tests') {
            quest.subject = readOptional(questDir.full, 'subject');
            quest.mutants = readMutants(questDir.full, questFile);
            if (!quest.subject) throw new ContentError(`${questFile}: write-tests quests need a subject file`);
            if (quest.mutants.length === 0) throw new ContentError(`${questFile}: write-tests quests need at least one mutant-N file`);
            quest.tests = '';
          } else if (!quest.tests) throw new ContentError(`${questFile}: code quests need a tests file`);
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
        } else if (data.type === 'design') {
          if (!data.rubric?.length) throw new ContentError(`${questFile}: design write-ups need a rubric`);
          quest.rubric = data.rubric;
          quest.minWords = data.minWords ?? 150;
          quest.template = readOptional(questDir.full, 'template') ?? '';
          quest.reference = readOptional(questDir.full, 'reference');
          if (!quest.reference) throw new ContentError(`${questFile}: design write-ups need a reference.md`);
        } else {
          if (!data.requirements?.length) throw new ContentError(`${questFile}: projects need requirements`);
          quest.requirements = data.requirements;
        }

        chapter.quests.push(quest);
        quests.push(quest);
        bySlug.set(quest.slug, quest);
      }
      if (chapter.quests.length === 0) throw new ContentError(`${chapterDir.full}: chapter has no quests`);
      track.chapters.push(chapter);
      chapters.push(chapter);
    }
    if (track.chapters.length === 0) throw new ContentError(`${trackDir.full}: track has no chapters`);
    tracks.push(track);
  }

  return { tracks, chapters, quests, bySlug, totalXp: quests.reduce((sum, q) => sum + q.xp, 0) };
}

/** Count words in a design document (ignores Markdown punctuation like #, -, *). */
export function countWords(text: string): number {
  return (text.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) ?? []).length;
}

/** Grade quiz answers. Returns which answers were correct. */
export function gradeQuiz(quest: Quest, answers: number[]): boolean[] {
  return (quest.questions ?? []).map((q, i) => answers[i] === q.answer);
}
