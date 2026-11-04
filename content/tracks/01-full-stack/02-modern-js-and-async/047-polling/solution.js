async function pollUntil(check, isDone, { intervalMs, timeoutMs, isFailed = () => false }) {
  const start = Date.now();
  for (;;) {
    const value = await check();
    if (isDone(value)) return value;
    if (isFailed(value)) throw new Error('Job failed');
    if (Date.now() - start + intervalMs > timeoutMs) throw new Error('Timed out');
    await sleep(intervalMs);
  }
}
