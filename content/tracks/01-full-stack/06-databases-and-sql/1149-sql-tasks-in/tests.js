test('returns the expected rows', () => {
  expect(result).toEqual([{"id":5,"title":"Review PR"},{"id":6,"title":"Plan sprint"},{"id":7,"title":"Fix login"},{"id":8,"title":"Add caching"},{"id":9,"title":"Write tests"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
