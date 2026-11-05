test('returns the expected rows', () => {
  expect(result).toEqual([{"category":"office"},{"category":"tech"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
