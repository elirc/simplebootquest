async function withFallback(primary, fallback, timeoutMs) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error('timeout')), timeoutMs);
  });
  try {
    const value = await Promise.race([primary(), timeout]);
    return { value, source: 'primary' };
  } catch {
    return { value: await fallback(), source: 'fallback' };
  } finally {
    clearTimeout(timer);
  }
}
