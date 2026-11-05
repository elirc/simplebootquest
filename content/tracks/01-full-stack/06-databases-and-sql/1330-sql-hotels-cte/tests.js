test('returns the expected rows', () => {
  expect(result).toEqual([{"city":"Kyoto"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
