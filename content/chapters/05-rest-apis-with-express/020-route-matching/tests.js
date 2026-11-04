test('matches static paths', () => {
  expect(matchPath('/todos', '/todos')).toEqual({});
  expect(matchPath('/todos', '/users')).toBeNull();
});

test('extracts params', () => {
  expect(matchPath('/users/:userId/posts/:postId', '/users/42/posts/7')).toEqual({ userId: '42', postId: '7' });
});

test('segment counts must match', () => {
  expect(matchPath('/todos/:id', '/todos')).toBeNull();
  expect(matchPath('/todos/:id', '/todos/1/extra')).toBeNull();
});

test('ignores trailing slashes', () => {
  expect(matchPath('/todos', '/todos/')).toEqual({});
});

test('decodes params', () => {
  expect(matchPath('/tags/:name', '/tags/hello%20world')).toEqual({ name: 'hello world' });
});

test('router dispatches by method and path', () => {
  const router = createRouter();
  router.add('GET', '/todos', () => ({ status: 200, body: 'list' }));
  router.add('GET', '/todos/:id', ({ id }) => ({ status: 200, body: `todo ${id}` }));
  router.add('DELETE', '/todos/:id', () => ({ status: 204 }));
  expect(router.handle('GET', '/todos')).toEqual({ status: 200, body: 'list' });
  expect(router.handle('GET', '/todos/3')).toEqual({ status: 200, body: 'todo 3' });
  expect(router.handle('DELETE', '/todos/3')).toEqual({ status: 204 });
  expect(router.handle('POST', '/todos')).toEqual({ status: 404 });
});

test('first matching route wins', () => {
  const router = createRouter();
  router.add('GET', '/todos/:id', () => 'param');
  router.add('GET', '/todos/stats', () => 'stats');
  expect(router.handle('GET', '/todos/stats')).toBe('param');
});
