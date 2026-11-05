test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"code":"A-100"},{"id":2,"code":"A-101"},{"id":3,"code":"E-500"},{"id":4,"code":"B-201"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
