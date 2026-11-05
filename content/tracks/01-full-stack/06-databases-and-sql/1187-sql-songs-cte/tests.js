test('returns the expected rows', () => {
  expect(result).toEqual([{"artist":"The Pines"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
