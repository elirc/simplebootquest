type Check = () => Promise<unknown>;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      (e) => { clearTimeout(timer); reject(e); },
    );
  });
}

export function createHealthHandler(
  checks: Record<string, Check>,
  options: { timeoutMs: number; now: () => number },
) {
  return async (req: unknown, res: any) => {
    const start = options.now();
    const names = Object.keys(checks);
    const results = await Promise.allSettled(
      names.map((name) => withTimeout(Promise.resolve().then(checks[name]!), options.timeoutMs)),
    );
    const statuses: Record<string, 'up' | 'down'> = {};
    names.forEach((name, i) => {
      statuses[name] = results[i]!.status === 'fulfilled' ? 'up' : 'down';
    });
    const healthy = Object.values(statuses).every((s) => s === 'up');
    res.status(healthy ? 200 : 503).json({
      status: healthy ? 'ok' : 'error',
      checks: statuses,
      durationMs: options.now() - start,
    });
  };
}
