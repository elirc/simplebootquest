test('merges', () => expect(mergeSorted([1, 4, 9], [2, 3, 10, 11])).toEqual([1, 2, 3, 4, 9, 10, 11]));
test('duplicates and empties', () => {
  expect(mergeSorted([1, 2], [2, 2])).toEqual([1, 2, 2, 2]);
  expect(mergeSorted([], [5])).toEqual([5]);
  expect(mergeSorted([], [])).toEqual([]);
});
