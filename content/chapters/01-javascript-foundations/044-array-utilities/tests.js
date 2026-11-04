test('unique', () => {
  expect(unique([3, 1, 3, 2, 1])).toEqual([3, 1, 2]);
});

test('chunk', () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  expect(chunk([], 3)).toEqual([]);
});

test('range', () => {
  expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
  expect(range(1, 10, 3)).toEqual([1, 4, 7]);
  expect(range(5, 5)).toEqual([]);
});

test('zip', () => {
  expect(zip(['a', 'b', 'c'], [1, 2])).toEqual([['a', 1], ['b', 2]]);
});

test('partition', () => {
  expect(partition([1, 2, 3, 4, 5], (n) => n % 2 === 0)).toEqual([[2, 4], [1, 3, 5]]);
});
