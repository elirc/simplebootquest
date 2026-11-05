function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      (e) => { clearTimeout(timer); reject(e); },
    );
  });
}

async function runChecks(checks, { timeoutMs }) {
  const results = await Promise.all(
    checks.map(async (c) => {
      const start = Date.now();
      try {
        await withTimeout(Promise.resolve().then(c.run), timeoutMs);
        return [c, { ok: true, ms: Date.now() - start }];
      } catch (err) {
        return [c, { ok: false, error: err instanceof Error ? err.message : String(err), ms: Date.now() - start }];
      }
    }),
  );
  const out = {};
  let status = 'ok';
  for (const [c, r] of results) {
    out[c.name] = r;
    if (!r.ok && c.critical) status = 'down';
    else if (!r.ok && status === 'ok') status = 'degraded';
  }
  return { status, checks: out };
}

function httpStatus(result) {
  return result.status === 'down' ? 503 : 200;
}
