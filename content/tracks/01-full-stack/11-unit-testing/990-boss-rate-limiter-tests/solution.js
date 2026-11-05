describe('createLimiter', () => {
  let t;
  const now = () => t;
  beforeEach(() => {
    t = 0;
  });

  test('allows up to the limit and counts down', () => {
    const limiter = createLimiter({ limit: 3, windowMs: 1000, now });
    expect(limiter.hit('ip')).toEqual({ allowed: true, remaining: 2, resetInMs: 1000 });
    t = 100;
    expect(limiter.hit('ip')).toEqual({ allowed: true, remaining: 1, resetInMs: 900 });
    expect(limiter.hit('ip')).toEqual({ allowed: true, remaining: 0, resetInMs: 900 });
  });

  test('blocks the request after the limit', () => {
    const limiter = createLimiter({ limit: 2, windowMs: 1000, now });
    limiter.hit('ip');
    limiter.hit('ip');
    t = 400;
    expect(limiter.hit('ip')).toEqual({ allowed: false, remaining: 0, resetInMs: 600 });
  });

  test('a new window starts exactly at windowMs', () => {
    const limiter = createLimiter({ limit: 1, windowMs: 1000, now });
    limiter.hit('ip');
    t = 999;
    expect(limiter.hit('ip').allowed).toBe(false);
    t = 1000;
    expect(limiter.hit('ip')).toEqual({ allowed: true, remaining: 0, resetInMs: 1000 });
  });

  test('blocked requests do not extend the window', () => {
    const limiter = createLimiter({ limit: 1, windowMs: 1000, now });
    limiter.hit('ip');
    t = 900;
    limiter.hit('ip');
    t = 1000;
    expect(limiter.hit('ip').allowed).toBe(true);
  });

  test('keys are independent', () => {
    const limiter = createLimiter({ limit: 1, windowMs: 1000, now });
    expect(limiter.hit('a').allowed).toBe(true);
    expect(limiter.hit('b').allowed).toBe(true);
    expect(limiter.hit('a').allowed).toBe(false);
  });

  test('rejects invalid limits', () => {
    for (const limit of [0, -1, 1.5]) {
      expect(() => createLimiter({ limit, windowMs: 1000, now })).toThrow(RangeError);
    }
  });
});
