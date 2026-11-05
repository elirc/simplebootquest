test('returns the expected rows', () => {
  expect(result).toEqual([{"kind":"cardio"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
