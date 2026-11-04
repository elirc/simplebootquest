test('commonTags', () => {
  expect(commonTags(['js', 'css', 'node', 'js'], ['node', 'js', 'go'])).toEqual(['js', 'node']);
});

test('countBy returns a Map', () => {
  const words = ['apple', 'avocado', 'banana', 'blueberry', 'cherry'];
  const result = countBy(words, (w) => w[0]);
  expect(result).toBeInstanceOf(Map);
  expect([...result]).toEqual([['a', 2], ['b', 2], ['c', 1]]);
});

test('mostFrequent', () => {
  expect(mostFrequent(['a', 'b', 'b', 'c', 'b', 'a'])).toBe('b');
  expect(mostFrequent(['x', 'y', 'y', 'x'])).toBe('y');
  expect(mostFrequent([])).toBeUndefined();
});
