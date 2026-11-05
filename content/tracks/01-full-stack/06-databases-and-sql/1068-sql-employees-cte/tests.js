test('returns the expected rows', () => {
  expect(result).toEqual([{"level":"junior"},{"level":"mid"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
