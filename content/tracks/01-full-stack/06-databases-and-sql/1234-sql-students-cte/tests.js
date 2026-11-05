test('returns the expected rows', () => {
  expect(result).toEqual([{"course":"data"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
