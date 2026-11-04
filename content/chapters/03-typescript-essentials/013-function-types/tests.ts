test('combine returns the first error', () => {
  const notEmpty = (s) => (s ? null : 'required');
  const short = (s) => (s.length <= 5 ? null : 'too long');
  const check = combine(notEmpty, short);
  expect(check('')).toBe('required');
  expect(check('toolong')).toBe('too long');
  expect(check('ok')).toBeNull();
});

test('assertNever throws', () => {
  expect(() => assertNever('surprise')).toThrow('Unexpected value: surprise');
});

test('retryable', () => {
  let calls = 0;
  const flaky = retryable((a, b) => {
    calls++;
    if (calls < 3) throw new Error('flaky');
    return a + b;
  }, 5);
  expect(flaky(2, 3)).toBe(5);
  expect(calls).toBe(3);
  expect(() => retryable(() => { throw new Error('always'); }, 2)()).toThrow('always');
});
