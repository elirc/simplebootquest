test('returns the expected rows', () => {
  expect(result).toEqual([{"id":5,"title":"Kindred"},{"id":6,"title":"Persuasion"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
