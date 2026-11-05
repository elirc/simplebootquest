test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"reference":"TX-06"},{"id":6,"reference":"TX-12"},{"id":7,"reference":"TX-03"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
