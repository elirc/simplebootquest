/// <reference lib="webworker" />
/**
 * Runs learner code off the main thread. If the code loops forever, the page
 * terminates this worker — the UI never freezes. Workers also have no access
 * to the DOM, cookies or localStorage of the page.
 */
import initSqlJs from 'sql.js';
import wasmUrl from 'sql.js/dist/sql-wasm.wasm?url';
import { runQuest, type RunRequest, type SqlJsLike } from '@sbq/runner';

let sqlPromise: Promise<SqlJsLike> | undefined;
const loadSql = () => (sqlPromise ??= initSqlJs({ locateFile: () => wasmUrl }) as Promise<SqlJsLike>);

self.onmessage = async (event: MessageEvent<RunRequest>) => {
  const result = await runQuest(event.data, { loadSql });
  self.postMessage(result);
};
