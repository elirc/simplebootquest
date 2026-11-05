test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"name":"Frances"},{"id":4,"name":"Radia"},{"id":5,"name":"Ken"},{"id":8,"name":"Dennis"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
