/**
 * Proves the curriculum is correct:
 *  - every quest file parses and has the fields its type requires
 *  - every reference solution passes its tests
 *  - every starter file FAILS its tests (otherwise the quest is free XP)
 *
 * Run with: npm run validate:content
 */
import initSqlJs from 'sql.js';
import { loadCurriculum } from '@sbq/curriculum';
import { runQuest, type RunResult } from '@sbq/runner';

const loadSql = () => initSqlJs();

// Starter code often ignores promises the tests create (e.g. Promise.reject(...)).
// Browsers just log those; don't let them crash the validator.
process.on('unhandledRejection', () => {});

function describeFailure(r: RunResult): string {
  if (r.error) return r.error;
  return r.results
    .filter((t) => !t.passed)
    .map((t) => `"${t.name}": ${t.error}`)
    .join('\n      ');
}

async function main() {
  const curriculum = loadCurriculum();
  const problems: string[] = [];
  let checked = 0;

  for (const quest of curriculum.quests) {
    if (quest.type !== 'code') continue;
    const base = { language: quest.language!, tests: quest.tests!, setup: quest.setup };

    const solution = await runQuest({ ...base, code: quest.solution! }, { loadSql });
    if (!solution.passed) problems.push(`✖ ${quest.slug}: solution fails\n      ${describeFailure(solution)}`);

    const starter = await runQuest({ ...base, code: quest.starter ?? '' }, { loadSql });
    if (starter.passed) problems.push(`✖ ${quest.slug}: starter code already passes every test`);
    checked++;
  }

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
