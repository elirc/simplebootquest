test('myMap passes item and index', () => {
  expect(myMap([1, 2, 3], (n) => n * 10)).toEqual([10, 20, 30]);
  expect(myMap(['a', 'b'], (s, i) => s + i)).toEqual(['a0', 'b1']);
});

test('myFilter', () => {
  expect(myFilter([1, 2, 3, 4], (n) => n > 2)).toEqual([3, 4]);
});

test('not inverts a predicate', () => {
  const isEmpty = (s) => s.length === 0;
  expect(['', 'a', ''].filter(not(isEmpty))).toEqual(['a']);
});

test('times', () => {
  expect(times(4, (i) => i * i)).toEqual([0, 1, 4, 9]);
  expect(times(0, () => 1)).toEqual([]);
});
