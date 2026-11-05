test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"title":"Lanterns"},{"id":3,"title":"Sunrise"},{"id":7,"title":"Velvet"},{"id":8,"title":"Tides"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
