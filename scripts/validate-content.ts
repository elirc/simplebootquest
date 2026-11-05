/**
 * Proves the curriculum is correct:
 *  - every quest file parses and has the fields its type requires
 *  - every reference solution passes its tests
 *  - every starter file FAILS its tests (otherwise the quest is free XP)
 *
 * Run with: npm run validate:content
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { availableParallelism } from 'node:os';
import path from 'node:path';
import { Worker } from 'node:worker_threads';
import { countWords, loadCurriculum } from '@sbq/curriculum';
import type { RunRequest, RunResult } from '@sbq/runner';

const TIMEOUT_MS = 10_000;

/**
 * Code runs in a worker thread, like the browser's Web Worker: if a starter
 * (or a buggy solution) loops forever, we terminate the worker instead of
 * hanging the whole validation run.
 */
class Sandbox {
  private worker = this.spawn();
  private runs = 0;

  private spawn() {
    return new Worker(new URL('./validate-worker.ts', import.meta.url), { execArgv: process.execArgv });
  }

  private queue: Promise<unknown> = Promise.resolve();

  /** Runs are serialized per worker: one message in flight at a time. */
  run(req: RunRequest): Promise<RunResult> {
    const result = this.queue.then(() => this.runNow(req));
    this.queue = result;
    return result;
  }

  private runNow(req: RunRequest): Promise<RunResult> {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        this.worker.removeAllListeners('message');
        void this.worker.terminate();
        this.worker = this.spawn();
        resolve({ passed: false, results: [], logs: [], error: `Timed out after ${TIMEOUT_MS}ms`, durationMs: TIMEOUT_MS });
      }, TIMEOUT_MS);
      this.worker.once('message', (result: RunResult) => {
        clearTimeout(timer);
        // Recycle workers regularly so leaked timers or globals from one quest
        // can't affect another (the browser uses a fresh worker for every run).
        if (++this.runs % 200 === 0) {
          void this.worker.terminate();
          this.worker = this.spawn();
        }
        resolve(result);
      });
      this.worker.postMessage(req);
    });
  }

  close() {
    return this.queue.then(() => this.worker.terminate());
  }
}

function describeFailure(r: RunResult): string {
  if (r.error) return r.error;
  return r.results
    .filter((t) => !t.passed)
    .map((t) => `"${t.name}": ${t.error}`)
    .join('\n      ');
}

/**
 * Slugs are permanent ids: learners' progress points at them. A slug that
 * disappears orphans progress and lets XP be earned twice, so every published
 * slug is recorded in content/slugs.lock and may never vanish.
 */
function checkSlugLock(slugs: string[], write: boolean): string[] {
  const lockFile = path.resolve(import.meta.dirname, '../content/slugs.lock');
  const locked = existsSync(lockFile) ? readFileSync(lockFile, 'utf8').split('\n').filter(Boolean) : [];
  const current = new Set(slugs);
  const problems = locked.filter((s) => !current.has(s)).map((s) => `✖ ${s}: published slug was removed or renamed (progress would be orphaned). Restore it, or remove it from content/slugs.lock deliberately.`);
  const added = slugs.filter((s) => !locked.includes(s));
  if (added.length) {
    if (write) {
      writeFileSync(lockFile, [...locked, ...added].sort().join('\n') + '\n');
      console.log(`Recorded ${added.length} new slug(s) in content/slugs.lock.`);
    } else {
      problems.push(`✖ ${added.length} new slug(s) are not in content/slugs.lock (e.g. ${added.slice(0, 3).join(', ')}). Run: npm run validate:content -- --write-lock`);
    }
  }
  return problems;
}

async function main() {
  const curriculum = loadCurriculum();
  const only = process.argv.find((a) => a.startsWith('--only='))?.slice(7);
  const poolSize = Math.max(1, Math.min(8, availableParallelism() - 1));
  const pool = Array.from({ length: poolSize }, () => new Sandbox());
  const problems: string[] = checkSlugLock(curriculum.quests.map((q) => q.slug), process.argv.includes('--write-lock'));
  let checked = 0;
  const jobs: (() => Promise<void>)[] = [];

  for (const quest of curriculum.quests) {
    if (only && !quest.slug.includes(only) && !quest.chapterSlug.includes(only)) continue;
    if (quest.type === 'design') {
      // Like "the starter must fail": submitting the untouched template must not be possible,
      // and the reference design must itself meet the bar it sets.
      const min = quest.minWords ?? 150;
      if (countWords(quest.template ?? '') >= min) problems.push(`✖ ${quest.slug}: template alone meets the ${min}-word minimum`);
      if (countWords(quest.reference ?? '') < min) problems.push(`✖ ${quest.slug}: reference design is shorter than ${min} words`);
      if ((quest.rubric?.length ?? 0) < 4) problems.push(`✖ ${quest.slug}: rubric needs at least 4 items`);
      continue;
    }
    if (quest.type !== 'code') continue;
    const base = {
      language: quest.language!,
      tests: quest.tests!,
      setup: quest.setup,
      // write-tests quests: the "solution" is a test suite that must pass on the
      // subject and catch every mutant; the starter must not.
      ...(quest.mode === 'write-tests' ? { subject: quest.subject, mutants: quest.mutants } : {}),
    };

    jobs.push(async () => {
      const sandbox = pool[checked++ % pool.length]!;
      const solution = await sandbox.run({ ...base, code: quest.solution! });
      const starter = await sandbox.run({ ...base, code: quest.starter ?? '' });
      if (!solution.passed) problems.push(`✖ ${quest.slug}: solution fails\n      ${describeFailure(solution)}`);
      if (starter.passed) problems.push(`✖ ${quest.slug}: starter code already passes every test`);
    });
  }
  // Each worker drains the job list; jobs are spread across the pool.
  let next = 0;
  await Promise.all(
    pool.map(async () => {
      while (next < jobs.length) await jobs[next++]!();
    }),
  );
  await Promise.all(pool.map((s) => s.close()));

  const counts = curriculum.quests.reduce<Record<string, number>>((acc, q) => {
    acc[q.type] = (acc[q.type] ?? 0) + 1;
    return acc;
  }, {});

  console.log(
    `Curriculum: ${curriculum.chapters.length} chapters, ${curriculum.quests.length} quests ` +
      `(${Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(', ')}), ${curriculum.totalXp} XP total`,
  );
  console.log(`Checked ${checked} code quests against their solutions and starters.`);
  for (const track of curriculum.tracks) {
    const n = track.chapters.reduce((sum, c) => sum + c.quests.length, 0);
    console.log(`  ${track.icon} ${track.title}: ${track.chapters.length} chapters, ${n} quests`);
  }

  if (problems.length) {
    console.error(`\n${problems.join('\n')}\n\n${problems.length} problem(s) found.`);
    process.exit(1);
  }
  console.log('✔ All content is valid.');
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
