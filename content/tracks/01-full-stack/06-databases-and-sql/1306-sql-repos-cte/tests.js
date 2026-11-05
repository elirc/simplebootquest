test('returns the expected rows', () => {
  expect(result).toEqual([{"language":"TypeScript"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
