test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"name":"Hugo"},{"id":2,"name":"Amara"},{"id":3,"name":"Keiko"},{"id":4,"name":"Dara"},{"id":5,"name":"Ines"},{"id":6,"name":"Luca"},{"id":7,"name":"Jonah"},{"id":8,"name":"Bilal"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
