function createRateLimiter({ limit, windowMs, now = Date.now }) {
  return {
    hit(key) {
      return { allowed: true, remaining: limit, resetAt: now() + windowMs };
    },
  };
}
