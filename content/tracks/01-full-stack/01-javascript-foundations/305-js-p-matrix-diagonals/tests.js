const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
test('diagonals', () => expect(diagonalSums(m)).toEqual({ main: 15, anti: 15 }));
test('diagonals 2x2', () => expect(diagonalSums([[1, 2], [3, 4]])).toEqual({ main: 5, anti: 5 }));
test('rotate', () => {
  expect(rotateClockwise(m)).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  expect(m[0]).toEqual([1, 2, 3]);
});
