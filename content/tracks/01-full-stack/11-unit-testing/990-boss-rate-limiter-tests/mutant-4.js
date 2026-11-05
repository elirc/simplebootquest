// mutant: blocked requests restart the window
function createLimiter({ limit, windowMs, now }) {
  if (!Number.isInteger(limit) || limit < 1) throw new RangeError('limit must be a positive integer');
  const windows = new Map();
  return {
    hit(key) {
      const t = now();
      let w = windows.get(key);
      if (!w || t - w.start >= windowMs) {
        w = { start: t, count: 0 };
        windows.set(key, w);
      }
      const resetInMs = w.start + windowMs - t;
      if (w.count >= limit) {
        windows.set(key, { start: t, count: w.count });
        return { allowed: false, remaining: 0, resetInMs };
      }
      w.count++;
      return { allowed: true, remaining: limit - w.count, resetInMs };
    },
  };
}
