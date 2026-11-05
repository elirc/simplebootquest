test('right', () => expect(rotate([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]));
test('left', () => expect(rotate([1, 2, 3, 4, 5], -1)).toEqual([2, 3, 4, 5, 1]));
test('wraps', () => expect(rotate([1, 2, 3], 7)).toEqual([3, 1, 2]));
test('immutable and empty', () => {
  const a = Object.freeze([1, 2]);
  expect(rotate(a, 1)).toEqual([2, 1]);
  expect(rotate([], 3)).toEqual([]);
});
