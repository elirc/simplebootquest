test('buildPath', () => {
  expect(buildPath('/users/:userId/posts/:postId', { userId: 7, postId: 3 })).toBe('/users/7/posts/3');
  expect(buildPath('/tags/:name', { name: 'c++ & more' })).toBe('/tags/c%2B%2B%20%26%20more');
  expect(() => buildPath('/users/:id', {})).toThrow('Missing param: id');
});

test('paramNames', () => {
  expect(paramNames('/a/:x/b/:y_2')).toEqual(['x', 'y_2']);
  expect(paramNames('/static')).toEqual([]);
});

test('withQuery sorts keys and skips undefined', () => {
  expect(withQuery('/todos', { page: 2, done: 'false', q: undefined })).toBe('/todos?done=false&page=2');
  expect(withQuery('/todos', {})).toBe('/todos');
});
