test('range', () => {
  expect([...range(0, 5)]).toEqual([0, 1, 2, 3, 4]);
  expect([...range(0, 10, 4)]).toEqual([0, 4, 8]);
});

test('take works on infinite generators', () => {
  expect(take(naturals(), 4)).toEqual([1, 2, 3, 4]);
  expect(take([1, 2], 5)).toEqual([1, 2]);
  expect(take(naturals(), 0)).toEqual([]);
});

test('mapIter is lazy', () => {
  const squares = mapIter(naturals(), (n) => n * n);
  expect(take(squares, 3)).toEqual([1, 4, 9]);
});
