const big = Array.from({ length: 1000000 }, (_, i) => i * 2);
test('finds items', () => {
  expect(binarySearch([1, 3, 5, 7, 9], 7)[0]).toBe(3);
  expect(binarySearch([1, 3, 5, 7, 9], 1)[0]).toBe(0);
  expect(binarySearch([1, 3, 5, 7, 9], 9)[0]).toBe(4);
});
test('missing items', () => {
  expect(binarySearch([1, 3, 5], 4)[0]).toBe(-1);
  expect(binarySearch([], 4)[0]).toBe(-1);
});
test('takes about log2(n) steps', () => {
  const [index, steps] = binarySearch(big, 1234566);
  expect(index).toBe(617283);
  expect(steps).toBeLessThanOrEqual(21);
});
