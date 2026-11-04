async function retry(fn, { retries = 3, baseMs = 10, shouldRetry = () => true, sleep } = {}) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn(attempt);
    } catch (err) {
      if (attempt > retries || !shouldRetry(err)) throw err;
      await sleep(baseMs * 2 ** (attempt - 1));
    }
  }
}
