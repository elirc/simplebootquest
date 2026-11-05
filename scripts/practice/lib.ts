/**
 * Shared helpers for the practice generators.
 *
 * Practice quests are generated, not hand-written, so they can be numerous
 * *and* correct: every expected answer is computed by running reference code
 * (Node, sql.js, or the runner's own Express/React runtimes), never typed by
 * hand. Generation is deterministic (seeded), so re-running produces the same
 * files, and slugs stay stable across runs.
 */
import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

// Misconception variants may leave promises rejected on purpose; that's expected while generating.
process.on('unhandledRejection', () => {});

export const CONTENT = path.resolve(import.meta.dirname, '../../content/tracks');

/** First folder number used for generated practice (after hand-written quests and bosses). */
export const GENERATED_START = 1000;

// ---------- deterministic randomness ----------

export function hashString(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export class Rng {
  private state: number;
  constructor(seed: string | number) {
    this.state = typeof seed === 'number' ? seed >>> 0 : hashString(seed);
    if (this.state === 0) this.state = 0x9e3779b9;
  }
  /** Uniform float in [0, 1) (mulberry32). */
  next(): number {
    let t = (this.state = (this.state + 0x6d2b79f5) >>> 0);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  int(min: number, max: number): number {
    return min + Math.floor(this.next() * (max - min + 1));
  }
  pick<T>(items: readonly T[]): T {
    return items[Math.floor(this.next() * items.length)]!;
  }
  shuffle<T>(items: readonly T[]): T[] {
    const a = [...items];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [a[i], a[j]] = [a[j]!, a[i]!];
    }
    return a;
  }
  sample<T>(items: readonly T[], n: number): T[] {
    return this.shuffle(items).slice(0, n);
  }
  bool(p = 0.5): boolean {
    return this.next() < p;
  }
}

// ---------- evaluation ----------

/** Run JavaScript in a fresh VM context and return the value of `expression`. */
export function evalJs(code: string, expression: string): unknown {
  const context = vm.createContext({ console: { log() {} } });
  vm.runInContext(code, context, { timeout: 1000 });
  return JSON.parse(JSON.stringify(vm.runInContext(`(${expression})`, context, { timeout: 1000 }) ?? null));
}

/** Run a snippet and capture everything it console.logs (synchronously and after microtasks/timers). */
export async function captureLogs(code: string): Promise<string[]> {
  const logs: string[] = [];
  const fmt = (v: unknown): string => {
    if (typeof v === 'string') return v;
    if (v === undefined) return 'undefined';
    if (typeof v === 'function') return '[Function]';
    if (Array.isArray(v)) return `[ ${v.map((x) => (typeof x === 'string' ? `'${x}'` : fmt(x))).join(', ')} ]`;
    if (v && typeof v === 'object') return JSON.stringify(v);
    return String(v);
  };
  const context = vm.createContext({
    console: { log: (...args: unknown[]) => logs.push(args.map(fmt).join(' ')) },
    setTimeout,
    clearTimeout,
    Promise,
    queueMicrotask,
  });
  vm.runInContext(code, context, { timeout: 1000 });
  // Let microtasks and short timers (all snippets use delays <= 20ms) finish.
  if (/setTimeout|Promise|await|queueMicrotask|async/.test(code)) await new Promise((r) => setTimeout(r, 30));
  return logs;
}

export const json = (v: unknown) => JSON.stringify(v);

// ---------- writing quests ----------

export type QuizQuestion = { prompt: string; options: string[]; answer: number; explanation?: string };

export interface BaseSpec {
  slug: string;
  /** Promoted into the chapter's core path (numbered before the boss, not optional). */
  core?: boolean;
  title: string;
  section: string;
  xp?: number;
  lesson: string;
  hints?: string[];
}
export interface CodeSpec extends BaseSpec {
  kind: 'code';
  language: 'js' | 'ts' | 'jsx' | 'sql';
  starter: string;
  solution: string;
  tests: string;
  setup?: string;
}
export interface WriteTestsSpec extends BaseSpec {
  kind: 'write-tests';
  language: 'js';
  subject: string;
  starter: string;
  solution: string;
  mutants: { name: string; code: string }[];
}
export interface QuizSpec extends BaseSpec {
  kind: 'quiz';
  questions: QuizQuestion[];
}
export type Spec = CodeSpec | QuizSpec | WriteTestsSpec;

const EXT = { js: 'js', ts: 'ts', jsx: 'jsx', sql: 'sql' } as const;

function frontmatter(meta: Record<string, unknown>): string {
  const lines = Object.entries(meta)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`);
  return `---\n${lines.join('\n')}\n---\n`;
}

/** Shuffle a question's options deterministically, keeping track of the answer. */
export function question(rng: Rng, prompt: string, correct: string, distractors: string[], explanation?: string): QuizQuestion {
  const unique = [...new Set(distractors.filter((d) => d !== correct))].slice(0, 3);
  const options = rng.shuffle([correct, ...unique]);
  return { prompt, options, answer: options.indexOf(correct), ...(explanation ? { explanation } : {}) };
}

/** Generated core quests are numbered 900–979: after the hand-written quests, before projects (980) and bosses (990). */
export const CORE_START = 900;

/** Remove previously generated quests (900–979 and >= GENERATED_START) from a chapter. */
export function clearGenerated(chapterDir: string) {
  for (const name of readdirSync(chapterDir)) {
    const m = /^(\d+)-/.exec(name);
    const n = m ? Number(m[1]) : -1;
    if (n >= GENERATED_START || (n >= CORE_START && n < 980)) rmSync(path.join(chapterDir, name), { recursive: true, force: true });
  }
}

export function writeSpecs(chapterDir: string, specs: Spec[]) {
  const seen = new Set<string>();
  let coreIndex = 0;
  let practiceIndex = 0;
  specs.forEach((spec) => {
    if (seen.has(spec.slug)) throw new Error(`Duplicate generated slug ${spec.slug}`);
    seen.add(spec.slug);
    const num = spec.core ? CORE_START + coreIndex++ : GENERATED_START + practiceIndex++;
    if (spec.core && num >= 980) throw new Error('Too many core quests in one chapter');
    const dir = path.join(chapterDir, `${num}-${spec.slug}`);
    mkdirSync(dir, { recursive: true });
    const base = {
      slug: spec.slug,
      title: spec.title,
      type: spec.kind === 'quiz' ? 'quiz' : 'code',
      ...(spec.kind !== 'quiz' ? { language: spec.language } : {}),
      ...(spec.kind === 'write-tests' ? { mode: 'write-tests' } : {}),
      xp: spec.xp ?? (spec.kind === 'quiz' ? 10 : 15),
      ...(spec.core ? {} : { optional: true, section: spec.section }),
      ...(spec.hints?.length ? { hints: spec.hints } : {}),
      ...(spec.kind === 'quiz' ? { questions: spec.questions } : {}),
    };
    const lesson = spec.lesson.trim().startsWith('#') ? spec.lesson.trim() : `# ${spec.title}\n\n${spec.lesson.trim()}`;
    writeFileSync(path.join(dir, 'quest.md'), frontmatter(base) + lesson + '\n');
    if (spec.kind === 'code') {
      const ext = EXT[spec.language];
      writeFileSync(path.join(dir, `starter.${ext}`), spec.starter.trimEnd() + '\n');
      writeFileSync(path.join(dir, `solution.${ext}`), spec.solution.trimEnd() + '\n');
      writeFileSync(path.join(dir, `tests.${spec.language === 'sql' ? 'js' : ext}`), spec.tests.trimEnd() + '\n');
      if (spec.setup) writeFileSync(path.join(dir, 'setup.sql'), spec.setup.trimEnd() + '\n');
    }
    if (spec.kind === 'write-tests') {
      writeFileSync(path.join(dir, 'subject.js'), spec.subject.trimEnd() + '\n');
      writeFileSync(path.join(dir, 'starter.js'), spec.starter.trimEnd() + '\n');
      writeFileSync(path.join(dir, 'solution.js'), spec.solution.trimEnd() + '\n');
      spec.mutants.forEach((m, j) => writeFileSync(path.join(dir, `mutant-${j + 1}.js`), `// mutant: ${m.name}\n${m.code.trimEnd()}\n`));
    }
  });
}

/** Group items into fixed-size chunks (e.g. 5 questions per quiz). */
export function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

export const pad = (n: number, width = 3) => String(n).padStart(width, '0');

// ---------- self-check ----------

import initSqlJs from 'sql.js';
import { runQuest, type RunRequest } from '../../packages/runner/src/index.ts';

let sqlLoader: ReturnType<typeof initSqlJs> | undefined;
const loadSql = () => (sqlLoader ??= initSqlJs()) as never;

/** Run a generated code quest: the solution must pass and the starter must fail. */
export async function verifySpec(spec: Spec): Promise<string | null> {
  if (spec.kind === 'quiz') {
    for (const q of spec.questions) {
      if (q.answer < 0 || q.answer >= q.options.length) return 'answer out of range';
      if (new Set(q.options).size !== q.options.length) return 'duplicate options';
      if (q.options.length < 2) return 'too few options';
    }
    return null;
  }
  const base: Omit<RunRequest, 'code'> =
    spec.kind === 'write-tests'
      ? { language: 'js', tests: '', subject: spec.subject, mutants: spec.mutants }
      : { language: spec.language, tests: spec.tests, setup: spec.setup };
  const solution = await runQuest({ ...base, code: spec.solution }, { loadSql, testTimeoutMs: 2000 });
  if (!solution.passed) {
    return `solution fails: ${solution.error ?? solution.results.filter((r) => !r.passed).map((r) => `${r.name}: ${r.error}`).join(' | ')}`;
  }
  const starter = await runQuest({ ...base, code: spec.starter }, { loadSql, testTimeoutMs: 2000 });
  if (starter.passed) return 'starter passes';
  return null;
}

/** Keep only specs that verify; print what was dropped (that's a generator bug to fix). */
export async function keepVerified<T extends Spec>(specs: T[], label: string): Promise<T[]> {
  const out: T[] = [];
  const problems: string[] = [];
  for (const s of specs) {
    const problem = await verifySpec(s);
    if (problem) problems.push(`  ${s.slug}: ${problem.slice(0, 300)}`);
    else out.push(s);
  }
  if (problems.length) console.warn(`${label}: dropped ${problems.length}/${specs.length}\n${problems.slice(0, 8).join('\n')}`);
  return out;
}
