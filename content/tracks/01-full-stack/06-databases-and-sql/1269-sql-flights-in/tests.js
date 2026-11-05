test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"number":"KL641"},{"id":2,"number":"AA100"},{"id":3,"number":"IB6251"},{"id":7,"number":"BA117"},{"id":8,"number":"AF22"},{"id":9,"number":"EK3"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
