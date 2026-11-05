test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"name":"Curry"},{"id":2,"name":"Pancakes"},{"id":3,"name":"Gyoza"},{"id":5,"name":"Shakshuka"},{"id":7,"name":"Tacos"},{"id":8,"name":"Chili"},{"id":9,"name":"Paella"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
