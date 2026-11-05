test('returns the expected rows', () => {
  expect(result).toEqual([{"genre":"sci-fi"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
