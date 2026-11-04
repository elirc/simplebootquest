const letters = Object.freeze(['a', 'b', 'c', 'd']);

test('insertAt', () => {
  expect(insertAt(letters, 1, 'x')).toEqual(['a', 'x', 'b', 'c', 'd']);
  expect(insertAt(letters, 4, 'z')).toEqual(['a', 'b', 'c', 'd', 'z']);
});

test('removeAt', () => {
  expect(removeAt(letters, 0)).toEqual(['b', 'c', 'd']);
  expect(removeAt(letters, 3)).toEqual(['a', 'b', 'c']);
});

test('replaceAt', () => {
  expect(replaceAt(letters, 2, 'C')).toEqual(['a', 'b', 'C', 'd']);
});

test('move', () => {
  expect(move(letters, 0, 2)).toEqual(['b', 'c', 'a', 'd']);
  expect(move(letters, 3, 0)).toEqual(['d', 'a', 'b', 'c']);
  expect(letters).toEqual(['a', 'b', 'c', 'd']);
});
