test('isRecord', () => {
  expect(isRecord({ a: 1 })).toBe(true);
  expect(isRecord(null)).toBe(false);
  expect(isRecord([1])).toBe(false);
});

test('errorMessage handles anything thrown', () => {
  expect(errorMessage(new TypeError('bad'))).toBe('bad');
  expect(errorMessage({ message: 'plain object' })).toBe('plain object');
  expect(errorMessage('just a string')).toBe('just a string');
  expect(errorMessage(42)).toBe('Unknown error');
  expect(errorMessage(null)).toBe('Unknown error');
});

test('isStringArray', () => {
  expect(isStringArray(['a', 'b'])).toBe(true);
  expect(isStringArray(['a', 1])).toBe(false);
  expect(isStringArray('a')).toBe(false);
});

test('filterDefined', () => {
  expect(filterDefined([1, null, 2, undefined, 0])).toEqual([1, 2, 0]);
});
