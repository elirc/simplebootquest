test('sumUntilNegative', () => {
  expect(sumUntilNegative([1, 2, 3, -1, 10])).toBe(6);
  expect(sumUntilNegative([-5, 1])).toBe(0);
  expect(sumUntilNegative([4, 5])).toBe(9);
});

test('sumSkippingNulls', () => {
  expect(sumSkippingNulls([1, null, 2, undefined, 3])).toBe(6);
});

test('firstDuplicate', () => {
  expect(firstDuplicate(['a', 'b', 'c', 'b', 'a'])).toBe('b');
  expect(firstDuplicate([1, 2, 3])).toBeUndefined();
});
