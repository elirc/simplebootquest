test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"name":"Mint"},{"id":2,"name":"Lavender"},{"id":4,"name":"Basil"},{"id":5,"name":"Ivy"},{"id":7,"name":"Peace Lily"},{"id":8,"name":"Aloe"},{"id":9,"name":"Cactus"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
