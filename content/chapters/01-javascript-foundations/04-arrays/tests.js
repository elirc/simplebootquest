test('sums even numbers', () => {
  expect(sumEvens([1, 2, 3, 4, 5, 6])).toBe(12);
  expect(sumEvens([1, 3])).toBe(0);
  expect(sumEvens([])).toBe(0);
});

test('finds the largest number', () => {
  expect(largest([3, 9, 2])).toBe(9);
  expect(largest([-5, -2, -9])).toBe(-2);
});

test('largest of an empty array is undefined', () => {
  expect(largest([])).toBeUndefined();
});

test('sorts numerically', () => {
  expect(sortedCopy([10, 9, 1, 100])).toEqual([1, 9, 10, 100]);
});

test('does not mutate the input', () => {
  const input = [3, 1, 2];
  sortedCopy(input);
  expect(input).toEqual([3, 1, 2]);
});
