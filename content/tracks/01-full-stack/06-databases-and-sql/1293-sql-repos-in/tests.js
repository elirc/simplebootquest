test('returns the expected rows', () => {
  expect(result).toEqual([{"id":2,"name":"design-system"},{"id":4,"name":"cli"},{"id":6,"name":"notifier"},{"id":7,"name":"web-app"},{"id":8,"name":"infra"},{"id":9,"name":"search"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
