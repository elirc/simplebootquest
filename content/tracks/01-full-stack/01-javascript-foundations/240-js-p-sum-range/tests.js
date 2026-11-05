test('sumRange', () => {
  expect(sumRange(1, 5)).toBe(15);
  expect(sumRange(5, 1)).toBe(15);
  expect(sumRange(-2, 2)).toBe(0);
  expect(sumRange(7, 7)).toBe(7);
});
test('sumRangeFast matches', () => {
  for (const [a, b] of [[1, 100], [10, 3], [-5, 5], [0, 0]]) expect(sumRangeFast(a, b)).toBe(sumRange(a, b));
  expect(sumRangeFast(1, 1000000)).toBe(500000500000);
});
