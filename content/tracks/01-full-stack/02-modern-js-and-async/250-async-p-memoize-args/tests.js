test('caches by all arguments', () => {
  let calls = 0;
  const add = memoize((a, b) => { calls++; return a + b; });
  expect(add(1, 2)).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add(2, 1)).toBe(3);
  expect(calls).toBe(2);
});
test('evicts the least recently used', () => {
  let calls = 0;
  const sq = memoize((n) => { calls++; return n * n; }, { maxSize: 2 });
  sq(1); sq(2); sq(1); sq(3);
  expect(sq.size()).toBe(2);
  calls = 0;
  sq(1);
  expect(calls).toBe(0);
  sq(2);
  expect(calls).toBe(1);
});
