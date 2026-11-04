interface Options {
  limit: number;
  windowMs: number;
  now: () => number;
}

export function createRateLimiter({ limit, windowMs, now }: Options) {
  const hits = new Map<string, number[]>();
  return {
    hit(key: string) {
      const t = now();
      const recent = (hits.get(key) ?? []).filter((ts) => ts > t - windowMs);
      if (recent.length >= limit) {
        hits.set(key, recent);
        return { allowed: false, remaining: 0, retryAfterMs: recent[0]! + windowMs - t };
      }
      recent.push(t);
      hits.set(key, recent);
      return { allowed: true, remaining: limit - recent.length, retryAfterMs: 0 };
    },
    reset(key: string) {
      hits.delete(key);
    },
  };
}
