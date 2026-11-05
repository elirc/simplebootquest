function setup() {
  let t = 1000;
  const limiter = createRateLimiter({ limit: 3, windowMs: 60000, now: () => t });
  return { limiter, advance: (ms) => (t += ms) };
}
test('allows up to the limit', () => {
  const { limiter } = setup();
  expect(limiter.hit('ip1')).toEqual({ allowed: true, remaining: 2, resetAt: 61000 });
  expect(limiter.hit('ip1').remaining).toBe(1);
  expect(limiter.hit('ip1')).toEqual({ allowed: true, remaining: 0, resetAt: 61000 });
});
test('blocks after the limit', () => {
  const { limiter } = setup();
  for (let i = 0; i < 3; i++) limiter.hit('ip1');
  expect(limiter.hit('ip1')).toEqual({ allowed: false, remaining: 0, resetAt: 61000 });
});
test('keys are independent', () => {
  const { limiter } = setup();
  for (let i = 0; i < 4; i++) limiter.hit('ip1');
  expect(limiter.hit('ip2').allowed).toBe(true);
});
test('window resets', () => {
  const { limiter, advance } = setup();
  for (let i = 0; i < 4; i++) limiter.hit('ip1');
  advance(59999);
  expect(limiter.hit('ip1').allowed).toBe(false);
  advance(1);
  expect(limiter.hit('ip1')).toEqual({ allowed: true, remaining: 2, resetAt: 121000 });
});
