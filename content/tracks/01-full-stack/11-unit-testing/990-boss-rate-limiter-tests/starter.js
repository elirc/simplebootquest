describe('createLimiter', () => {
  let t;
  const now = () => t;
  beforeEach(() => {
    t = 0;
  });

  test('allows the first request', () => {
    const limiter = createLimiter({ limit: 2, windowMs: 1000, now });
    expect(limiter.hit('ip').allowed).toBe(true);
  });
});
