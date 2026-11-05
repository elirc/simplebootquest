test('returns the expected rows', () => {
  expect(result).toEqual([{"continent":"Europe"},{"continent":"Oceania"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
