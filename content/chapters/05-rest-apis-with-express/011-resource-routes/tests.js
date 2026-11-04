test('top-level resource', () => {
  expect(resourceRoutes('posts')).toEqual([
    { method: 'GET', path: '/posts', action: 'list' },
    { method: 'GET', path: '/posts/:id', action: 'show' },
    { method: 'POST', path: '/posts', action: 'create' },
    { method: 'PATCH', path: '/posts/:id', action: 'update' },
    { method: 'DELETE', path: '/posts/:id', action: 'destroy' },
  ]);
});

test('nested resource', () => {
  expect(resourceRoutes('comments', { parent: 'posts' }).map((r) => r.path)).toEqual([
    '/posts/:postId/comments',
    '/posts/:postId/comments/:id',
    '/posts/:postId/comments',
    '/posts/:postId/comments/:id',
    '/posts/:postId/comments/:id',
  ]);
});

test('describeRoute', () => {
  expect(describeRoute('GET', '/posts')).toBe('list');
  expect(describeRoute('POST', '/posts/7/comments')).toBe('create');
  expect(describeRoute('DELETE', '/posts/7/comments/3')).toBe('destroy');
  expect(describeRoute('POST', '/posts/7')).toBeNull();
  expect(describeRoute('GET', '/')).toBeNull();
});
