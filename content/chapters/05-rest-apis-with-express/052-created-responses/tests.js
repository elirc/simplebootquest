test('created', () => {
  const res = mockRes();
  created(res, '/api/todos', { id: 42, title: 'x' });
  expect(res.statusCode).toBe(201);
  expect(res.headers.Location).toBe('/api/todos/42');
  expect(res.body).toEqual({ id: 42, title: 'x' });
});

test('noContent', () => {
  const res = mockRes();
  noContent(res);
  expect(res.statusCode).toBe(204);
  expect(res.ended).toBe(true);
  expect(res.body).toBeUndefined();
});

test('paginationLinks in the middle', () => {
  expect(paginationLinks('/api/todos', { page: 2, pageSize: 20, total: 95 })).toBe(
    '</api/todos?page=1&pageSize=20>; rel="first", </api/todos?page=1&pageSize=20>; rel="prev", </api/todos?page=3&pageSize=20>; rel="next", </api/todos?page=5&pageSize=20>; rel="last"',
  );
});

test('paginationLinks at the edges', () => {
  expect(paginationLinks('/x', { page: 1, pageSize: 10, total: 10 })).toBe('</x?page=1&pageSize=10>; rel="first", </x?page=1&pageSize=10>; rel="last"');
  expect(paginationLinks('/x', { page: 1, pageSize: 10, total: 0 })).toContain('page=1&pageSize=10>; rel="last"');
});
