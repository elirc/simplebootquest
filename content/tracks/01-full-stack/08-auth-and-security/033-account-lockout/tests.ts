function setup() {
  let t = 0;
  const guard = createLoginGuard({ maxAttempts: 3, baseLockMs: 1000, now: () => t });
  return { guard, advance: (ms) => (t += ms) };
}

test('locks after max attempts', () => {
  const { guard } = setup();
  guard.recordFailure('ada');
  guard.recordFailure('ada');
  expect(guard.check('ada')).toEqual({ allowed: true });
  guard.recordFailure('ada');
  expect(guard.check('ada')).toEqual({ allowed: false, retryInMs: 1000 });
  expect(guard.check('grace')).toEqual({ allowed: true });
});

test('lock expires, and the next lockout is longer', () => {
  const { guard, advance } = setup();
  for (let i = 0; i < 3; i++) guard.recordFailure('ada');
  advance(1000);
  expect(guard.check('ada').allowed).toBe(true);
  for (let i = 0; i < 3; i++) guard.recordFailure('ada');
  expect(guard.check('ada').retryInMs).toBe(2000);
});

test('success resets everything', () => {
  const { guard, advance } = setup();
  for (let i = 0; i < 3; i++) guard.recordFailure('ada');
  advance(1000);
  guard.recordSuccess('ada');
  for (let i = 0; i < 3; i++) guard.recordFailure('ada');
  expect(guard.check('ada').retryInMs).toBe(1000);
});
