test('returns the expected rows', () => {
  expect(result).toEqual([{"difficulty":"easy"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
