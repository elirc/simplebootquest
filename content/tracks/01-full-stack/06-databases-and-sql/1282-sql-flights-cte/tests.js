test('returns the expected rows', () => {
  expect(result).toEqual([{"airline":"skyteam"},{"airline":"star"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
