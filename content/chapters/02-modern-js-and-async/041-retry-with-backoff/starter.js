async function retry(fn, { retries = 3, baseMs = 10, shouldRetry = () => true, sleep } = {}) {
  return fn(1);
}
