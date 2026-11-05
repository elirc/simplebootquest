test('returns the expected rows', () => {
  expect(result).toEqual([{"light":"low"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
