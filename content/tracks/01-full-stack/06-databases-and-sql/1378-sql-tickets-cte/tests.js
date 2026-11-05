test('returns the expected rows', () => {
  expect(result).toEqual([{"priority":"normal"},{"priority":"urgent"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
