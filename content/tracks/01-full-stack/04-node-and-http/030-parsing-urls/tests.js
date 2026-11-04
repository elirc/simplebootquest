test('parses the pathname', () => {
  expect(parseRequestUrl('/todos/42').pathname).toBe('/todos/42');
  expect(parseRequestUrl('/todos/42').query).toEqual({});
});

test('parses single and repeated query keys', () => {
  expect(parseRequestUrl('/todos?page=2&tag=a&tag=b')).toEqual({
    pathname: '/todos',
    query: { page: '2', tag: ['a', 'b'] },
  });
});

test('decodes encoded values', () => {
  expect(parseRequestUrl('/search?q=hello%20world&x=a%26b').query).toEqual({ q: 'hello world', x: 'a&b' });
});

test('builds query strings', () => {
  expect(buildQueryString({ page: 2, sort: 'title' })).toBe('?page=2&sort=title');
});

test('skips null/undefined and expands arrays', () => {
  expect(buildQueryString({ a: undefined, b: null, tag: ['x', 'y'] })).toBe('?tag=x&tag=y');
});

test('encodes special characters', () => {
  expect(buildQueryString({ q: 'tom & jerry' })).toBe('?q=tom+%26+jerry');
});

test('returns an empty string when there is nothing to add', () => {
  expect(buildQueryString({})).toBe('');
  expect(buildQueryString({ a: undefined })).toBe('');
});
