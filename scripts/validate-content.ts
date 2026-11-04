/**
 * Proves the curriculum is correct:
 *  - every quest file parses and has the fields its type requires
 *  - every reference solution passes its tests
 *  - every starter file FAILS its tests (otherwise the quest is free XP)
 *
 * Run with: npm run validate:content
 */
import { Worker } from 'node:worker_threads';
import { loadCurriculum } from '@sbq/curriculum';
import type { RunRequest, RunResult } from '@sbq/runner';

const TIMEOUT_MS = 10_000;

/**
 * Code runs in a worker thread, like the browser's Web Worker: if a starter
 * (or a buggy solution) loops forever, we terminate the worker instead of
 * hanging the whole validation run.
 */
class Sandbox {
  private worker = this.spawn();

  private spawn() {
    return new Worker(new URL('./validate-worker.ts', import.meta.url), { execArgv: process.execArgv });
  }

  run(req: RunRequest): Promise<RunResult> {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        this.worker.removeAllListeners('message');
        void this.worker.terminate();
        this.worker = this.spawn();
        resolve({ passed: false, results: [], logs: [], error: `Timed out after ${TIMEOUT_MS}ms`, durationMs: TIMEOUT_MS });
      }, TIMEOUT_MS);
      this.worker.once('message', (result: RunResult) => {
        clearTimeout(timer);
        resolve(result);
      });
      this.worker.postMessage(req);
    });
  }

  close() {
    return this.worker.terminate();
  }
}

function describeFailure(r: RunResult): string {
  if (r.error) return r.error;
  return r.results
    .filter((t) => !t.passed)
    .map((t) => `"${t.name}": ${t.error}`)
    .join('\n      ');
}

async function main() {
  const curriculum = loadCurriculum();
  const sandbox = new Sandbox();
  const problems: string[] = [];
  let checked = 0;

  for (const quest of curriculum.quests) {
    if (quest.type !== 'code') continue;
    const base = { language: quest.language!, tests: quest.tests!, setup: quest.setup };

    const solution = await sandbox.run({ ...base, code: quest.solution! });
    if (!solution.passed) problems.push(`✖ ${quest.slug}: solution fails\n      ${describeFailure(solution)}`);

    const starter = await sandbox.run({ ...base, code: quest.starter ?? '' });
    if (starter.passed) problems.push(`✖ ${quest.slug}: starter code already passes every test`);
    checked++;
  }
  await sandbox.close();

  const counts = curriculum.quests.reduce<Record<string, number>>((acc, q) => {
    acc[q.type] = (acc[q.type] ?? 0) + 1;
    return acc;
  }, {});

  console.log(
    `Curriculum: ${curriculum.chapters.length} chapters, ${curriculum.quests.length} quests ` +
      `(${Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(', ')}), ${curriculum.totalXp} XP total`,
  );
  console.log(`Checked ${checked} code quests against their solutions and starters.`);

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
