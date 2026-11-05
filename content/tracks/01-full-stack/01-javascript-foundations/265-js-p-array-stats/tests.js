test('odd length', () => expect(stats([3, 1, 2])).toEqual({ min: 1, max: 3, mean: 2, median: 2 }));
test('even length', () => expect(stats([4, 1, 3, 2])).toEqual({ min: 1, max: 4, mean: 2.5, median: 2.5 }));
test('does not mutate', () => {
  const input = Object.freeze([5, 1]);
  expect(stats(input).median).toBe(3);
});
test('empty', () => expect(stats([])).toBeNull());
