/** Runs one quest per message in a worker thread, so the parent can kill runaway code. */
import { parentPort } from 'node:worker_threads';
import initSqlJs from 'sql.js';
import { runQuest, type RunRequest } from '@sbq/runner';

// Starter code often ignores promises the tests create; don't crash on them.
process.on('unhandledRejection', () => {});

parentPort!.on('message', async (req: RunRequest) => {
  const result = await runQuest(req, { loadSql: () => initSqlJs() });
  parentPort!.postMessage(result);
});
