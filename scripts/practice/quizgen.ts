/**
 * Builder for "computed" quizzes: each generator produces a question whose
 * correct answer is calculated (by Node's own modules, a reference
 * implementation, or arithmetic), never typed by hand.
 */
import { chunk, question, Rng, type QuizQuestion, type QuizSpec } from './lib.ts';

export interface Computed {
  prompt: string;
  correct: string;
  wrong: string[];
  explanation?: string;
}
export interface QuizGen {
  id: string;
  topic: string;
  intro: string;
  make(r: Rng): Computed;
}

export function computedQuizzes(gens: QuizGen[], opts: { section: string; prefix: string; perGenerator: number; seed: string; titlePrefix?: string; xp?: number }): QuizSpec[] {
  const out: QuizSpec[] = [];
  for (const g of gens) {
    const rng = new Rng(`${opts.seed}:${g.id}`);
    const seen = new Set<string>();
    const qs: QuizQuestion[] = [];
    let guard = 0;
    while (qs.length < opts.perGenerator * 5 && guard++ < opts.perGenerator * 5 * 30) {
      const c = g.make(rng);
      if (seen.has(c.prompt)) continue;
      const wrong = [...new Set(c.wrong.filter((w) => w !== c.correct))];
      if (wrong.length < 2) continue;
      seen.add(c.prompt);
      qs.push(question(rng, c.prompt, c.correct, wrong.slice(0, 3), c.explanation));
    }
    chunk(qs, 5).forEach((group, i) => {
      if (group.length < 5) return;
      const title = `${opts.titlePrefix ?? 'Drill'}: ${g.topic} #${i + 1}`;
      out.push({ kind: 'quiz', slug: `${opts.prefix}-${g.id}-${i + 1}`, title, section: opts.section, lesson: `# ${title}\n\n${g.intro}`, questions: group, xp: opts.xp ?? 10 });
    });
  }
  return out;
}

/** Numeric distractors: plausible mistakes (off by 10×, swapped operation, rounding). */
export function numWrong(correct: number, extras: number[] = [], fmt: (n: number) => string = (n) => String(n)): string[] {
  const out = [...extras, correct * 10, correct / 10, correct * 2, correct / 2, correct + 1, correct - 1].filter((n) => Number.isFinite(n) && n !== correct);
  return [...new Set(out.map(fmt))].filter((s) => s !== fmt(correct));
}

export const fmtNum = (n: number) => {
  if (Math.abs(n) >= 1e9) return `${+(n / 1e9).toPrecision(3)} billion`;
  if (Math.abs(n) >= 1e6) return `${+(n / 1e6).toPrecision(3)} million`;
  if (Math.abs(n) >= 1e4) return Math.round(n).toLocaleString('en-US');
  return String(+n.toPrecision(3));
};
