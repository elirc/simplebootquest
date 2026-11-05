test('square', () => expect(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]));
test('rectangle', () => expect(spiral([[1, 2, 3, 4], [5, 6, 7, 8]])).toEqual([1, 2, 3, 4, 8, 7, 6, 5]));
test('single column and empty', () => {
  expect(spiral([[1], [2], [3]])).toEqual([1, 2, 3]);
  expect(spiral([])).toEqual([]);
});
