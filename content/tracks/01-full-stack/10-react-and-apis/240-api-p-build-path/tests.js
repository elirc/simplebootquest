test('fills params', () => {
  expect(buildPath('/users/:id/posts/:postId', { id: 5, postId: 'abc' })).toBe('/users/5/posts/abc');
});
test('encodes params', () => expect(buildPath('/tags/:name', { name: 'c++ & rust' })).toBe('/tags/c%2B%2B%20%26%20rust'));
test('missing params throw', () => {
  expect(() => buildPath('/users/:id', {})).toThrow('Missing param "id" for /users/:id');
  expect(() => buildPath('/users/:id', { id: null })).toThrow('Missing param "id"');
});
test('optional params', () => {
  expect(buildPath('/todos/:filter?', {})).toBe('/todos');
  expect(buildPath('/todos/:filter?', { filter: 'done' })).toBe('/todos/done');
});
test('query string', () => {
  expect(buildPath('/search', {}, { q: 'hello world', page: 2, empty: '', none: undefined, tags: ['a', 'b'] })).toBe('/search?q=hello%20world&page=2&tags=a&tags=b');
  expect(buildPath('/search', {}, { q: '' })).toBe('/search');
});
test('zero is a valid param', () => expect(buildPath('/pages/:n', { n: 0 })).toBe('/pages/0'));
