test('returns the expected rows', () => {
  expect(result).toEqual([{"id":3,"subject":"Missing order"},{"id":4,"subject":"Dark mode"},{"id":6,"subject":"Refund request"},{"id":7,"subject":"Feature idea"},{"id":9,"subject":"Password reset"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
