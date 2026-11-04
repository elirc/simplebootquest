async function pollUntil(check, isDone, { intervalMs, timeoutMs, isFailed = () => false }) {
  return check();
}
