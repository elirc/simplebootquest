function backoffDelays(retries, baseMs, maxMs) {
  return Array.from({ length: retries }, (_, i) => Math.min(baseMs * 2 ** i, maxMs));
}

async function retry(fn, { retries, shouldRetry = () => true, wait = async () => {} }) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn(attempt);
    } catch (err) {
      if (attempt > retries || !shouldRetry(err)) throw err;
      await wait(attempt);
    }
  }
}
