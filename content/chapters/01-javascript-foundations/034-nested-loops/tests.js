test('multiplicationTable', () => {
  expect(multiplicationTable(3)).toEqual([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  expect(multiplicationTable(0)).toEqual([]);
});

test('transpose', () => {
  expect(transpose([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 4], [2, 5], [3, 6]]);
  expect(transpose([])).toEqual([]);
});

test('hasPairWithSum uses two different elements', () => {
  expect(hasPairWithSum([1, 4, 6, 9], 10)).toBe(true);
  expect(hasPairWithSum([5, 1], 10)).toBe(false);
  expect(hasPairWithSum([5, 5], 10)).toBe(true);
});
