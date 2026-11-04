interface Options {
  limit: number;
  windowMs: number;
  now: () => number;
}

export function createRateLimiter({ limit, windowMs, now }: Options) {
  const hits = new Map<string, number[]>();
  return {
    hit(key: string) {
      // TODO
      return { allowed: true, remaining: limit, retryAfterMs: 0 };
    },
    reset(key: string) {},
  };
}
