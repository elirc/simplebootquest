function clock(start = 0) {
  let t = start;
  return { now: () => t, advance: (ms) => (t += ms) };
}

test('allows up to the limit', () => {
  const c = clock();
  const limiter = createRateLimiter({ limit: 3, windowMs: 1000, now: c.now });
  expect(limiter.hit('ip')).toEqual({ allowed: true, remaining: 2, retryAfterMs: 0 });
  expect(limiter.hit('ip').remaining).toBe(1);
  expect(limiter.hit('ip').remaining).toBe(0);
});

test('rejects over the limit with retryAfter', () => {
  const c = clock();
  const limiter = createRateLimiter({ limit: 2, windowMs: 1000, now: c.now });
  limiter.hit('ip');
  c.advance(300);
  limiter.hit('ip');
  c.advance(100);
  expect(limiter.hit('ip')).toEqual({ allowed: false, remaining: 0, retryAfterMs: 600 });
});

test('the window slides', () => {
  const c = clock();
  const limiter = createRateLimiter({ limit: 2, windowMs: 1000, now: c.now });
  limiter.hit('ip');
  c.advance(500);
  limiter.hit('ip');
  c.advance(501);
  expect(limiter.hit('ip').allowed).toBe(true);
  expect(limiter.hit('ip').allowed).toBe(false);
});

test('rejected requests are not recorded', () => {
  const c = clock();
  const limiter = createRateLimiter({ limit: 1, windowMs: 1000, now: c.now });
  limiter.hit('ip');
  c.advance(900);
  limiter.hit('ip');
  c.advance(101);
  expect(limiter.hit('ip').allowed).toBe(true);
});

test('keys are independent', () => {
  const limiter = createRateLimiter({ limit: 1, windowMs: 1000, now: clock().now });
  expect(limiter.hit('a').allowed).toBe(true);
  expect(limiter.hit('b').allowed).toBe(true);
  expect(limiter.hit('a').allowed).toBe(false);
});

test('reset clears a key', () => {
  const limiter = createRateLimiter({ limit: 1, windowMs: 1000, now: clock().now });
  limiter.hit('a');
  limiter.reset('a');
  expect(limiter.hit('a').allowed).toBe(true);
});
