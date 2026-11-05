test('returns the expected rows', () => {
  expect(result).toEqual([{"status":"cancelled"},{"status":"pending"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
