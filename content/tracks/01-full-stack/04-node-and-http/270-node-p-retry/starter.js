function backoffDelays(retries, baseMs, maxMs) {
  return [];
}

async function retry(fn, { retries, shouldRetry = () => true, wait = async () => {} }) {
  return fn(1);
}
