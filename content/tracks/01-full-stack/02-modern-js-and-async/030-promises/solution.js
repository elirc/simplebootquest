function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Timed out')), ms));
  return Promise.race([promise, timeout]);
}

function settleAll(promises) {
  return Promise.allSettled(promises).then((results) =>
    results.map((r) => (r.status === 'fulfilled' ? { ok: true, value: r.value } : { ok: false, error: r.reason })),
  );
}
