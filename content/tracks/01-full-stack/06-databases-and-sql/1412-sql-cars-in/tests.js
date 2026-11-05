test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"model":"Ioniq"},{"id":2,"model":"Golf"},{"id":4,"model":"Mazda3"},{"id":6,"model":"Prius"},{"id":7,"model":"Clio"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
