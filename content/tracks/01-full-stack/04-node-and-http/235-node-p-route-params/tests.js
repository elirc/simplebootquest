test('static match', () => expect(matchRoute('/health', '/health')).toEqual({}));
test('one param', () => expect(matchRoute('/users/:id', '/users/42')).toEqual({ id: '42' }));
test('several params', () => expect(matchRoute('/users/:id/posts/:postId', '/users/7/posts/99')).toEqual({ id: '7', postId: '99' }));
test('decodes params', () => expect(matchRoute('/tags/:name', '/tags/hello%20world')).toEqual({ name: 'hello world' }));
test('ignores query and trailing slash', () => expect(matchRoute('/users/:id', '/users/5/?tab=posts')).toEqual({ id: '5' }));
test('wildcard', () => expect(matchRoute('/files/*', '/files/docs/2024/report.pdf')).toEqual({ '*': 'docs/2024/report.pdf' }));
test('no match', () => {
  expect(matchRoute('/users/:id', '/users')).toBeNull();
  expect(matchRoute('/users/:id', '/users/1/extra')).toBeNull();
  expect(matchRoute('/users/:id', '/posts/1')).toBeNull();
});
