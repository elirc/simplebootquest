test('returns the expected rows', () => {
  expect(result).toEqual([{"genre":"fiction"},{"genre":"tech"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
