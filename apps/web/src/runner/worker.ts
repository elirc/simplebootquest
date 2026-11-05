/// <reference lib="webworker" />
/**
 * Runs learner code off the main thread. If the code loops forever, the page
 * terminates this worker — the UI never freezes. Workers have no access to
 * the DOM or the page's storage.
 *
 * Hardening (see docs/COUNCIL.md):
 * - Results go back over a private MessageChannel port that learner code
 *   never sees, so `self.postMessage({ passed: true })` can't fake a pass.
 * - Network APIs are disabled before learner code runs. The worker is
 *   same-origin, so fetch() would otherwise carry the learner's session
 *   cookie and a shared "try this code" snippet could call the API as them.
 */
import initSqlJs from 'sql.js';
import wasmUrl from 'sql.js/dist/sql-wasm.wasm?url';
import { runQuest, type RunRequest, type SqlJsLike } from '@sbq/runner';

let sqlPromise: Promise<SqlJsLike> | undefined;
const loadSql = () => (sqlPromise ??= initSqlJs({ locateFile: () => wasmUrl }) as Promise<SqlJsLike>);

function disableNetwork() {
  const blocked = (name: string) =>
    function () {
      throw new Error(`${name} is disabled in the code runner. Tests give you everything you need (for example a fake fetch).`);
    };
  const scope = self as unknown as Record<string, unknown>;
  const proto = Object.getPrototypeOf(self) as Record<string, unknown>;
  for (const name of ['fetch', 'XMLHttpRequest', 'WebSocket', 'EventSource', 'importScripts', 'Worker', 'SharedWorker', 'BroadcastChannel']) {
    for (const target of [scope, proto, Object.getPrototypeOf(proto) as Record<string, unknown>]) {
      try {
        Object.defineProperty(target, name, { value: blocked(name), configurable: false, writable: false });
      } catch {
        // Some properties may be non-configurable in some browsers; the own-property override above still shadows them.
      }
    }
  }
}

self.onmessage = async (event: MessageEvent<RunRequest>) => {
  const port = event.ports[0];
  if (!port) return;
  // sql.js must be loaded (it fetches its wasm) before the network is switched off.
  if (event.data.language === 'sql') await loadSql();
  disableNetwork();
  const result = await runQuest(event.data, { loadSql });
  port.postMessage(result);
};
