test('basic', () => expect(secondLargest([3, 9, 5, 7])).toBe(7));
test('duplicates of the max', () => expect(secondLargest([9, 9, 4])).toBe(4));
test('negatives', () => expect(secondLargest([-1, -5, -3])).toBe(-3));
test('none', () => {
  expect(secondLargest([4, 4])).toBeUndefined();
  expect(secondLargest([1])).toBeUndefined();
});
