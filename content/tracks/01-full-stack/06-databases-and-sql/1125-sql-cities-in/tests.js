test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"name":"Lagos"},{"id":2,"name":"Seoul"},{"id":6,"name":"Lisbon"},{"id":8,"name":"Turin"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
