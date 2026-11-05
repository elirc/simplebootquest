test('movingAverage', () => {
  expect(movingAverage([1, 2, 3, 4, 5], 3)).toEqual([2, 3, 4]);
  expect(movingAverage([1, 2], 2)).toEqual([1.5]);
  expect(movingAverage([1, 2], 3)).toEqual([]);
  expect(movingAverage([1, 1, 2], 3)).toEqual([1.33]);
});
test('runningTotals', () => expect(runningTotals([5, -2, 10])).toEqual([5, 3, 13]));
