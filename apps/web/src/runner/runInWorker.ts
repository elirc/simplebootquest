import type { RunRequest, RunResult } from '@sbq/runner';

const TIMEOUT_MS = 8000;

/** Run a quest's tests in a fresh Web Worker, killing it if it takes too long. */
export function runInWorker(request: RunRequest): Promise<RunResult> {
  return new Promise((resolve) => {
    const worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
    const started = Date.now();
    const timer = setTimeout(() => {
      worker.terminate();
      resolve({
        passed: false,
        results: [],
        logs: [],
        error: `Your code took longer than ${TIMEOUT_MS / 1000}s and was stopped. Is there an infinite loop?`,
        durationMs: Date.now() - started,
      });
    }, TIMEOUT_MS);

    // Results arrive on a private channel; messages posted by learner code
    // with self.postMessage() land on worker.onmessage and are ignored.
    const channel = new MessageChannel();
    channel.port1.onmessage = (event: MessageEvent<RunResult>) => {
      clearTimeout(timer);
      worker.terminate();
      channel.port1.close();
      resolve(event.data);
    };
    worker.onerror = (event) => {
      clearTimeout(timer);
      worker.terminate();
      resolve({ passed: false, results: [], logs: [], error: event.message || 'The code runner crashed.', durationMs: Date.now() - started });
    };
    worker.postMessage(request, [channel.port2]);
  });
}
