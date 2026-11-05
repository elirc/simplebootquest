test('returns the expected rows', () => {
  expect(result).toEqual([{"fuel":"hybrid"},{"fuel":"petrol"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
