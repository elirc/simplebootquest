async function retryUntil(fn, isDone, { attempts, delayMs }) {
  let lastError;
  for (let i = 1; i <= attempts; i++) {
    try {
      const result = await fn();
      if (isDone(result)) return result;
      lastError = undefined;
    } catch (err) {
      lastError = err;
    }
    if (i < attempts) await sleep(delayMs);
  }
  throw new Error(`Gave up after ${attempts} attempts`, { cause: lastError });
}
