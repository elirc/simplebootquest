test('always scopes to the user', () => {
  expect(buildTodoQuery(7, {})).toEqual({ where: { ownerId: 7 }, orderBy: { createdAt: 'desc' } });
});

test('cannot override ownerId', () => {
  expect(buildTodoQuery(7, { ownerId: '1' }).where.ownerId).toBe(7);
});

test('parses done', () => {
  expect(buildTodoQuery(1, { done: 'true' }).where.done).toBe(true);
  expect(buildTodoQuery(1, { done: 'false' }).where.done).toBe(false);
  expect('done' in buildTodoQuery(1, { done: 'yes' }).where).toBe(false);
});

test('searches titles case-insensitively', () => {
  expect(buildTodoQuery(1, { q: '  milk ' }).where.title).toEqual({ contains: 'milk', mode: 'insensitive' });
  expect('title' in buildTodoQuery(1, { q: '   ' }).where).toBe(false);
});

test('filters by allowed priorities only', () => {
  expect(buildTodoQuery(1, { priority: 'high' }).where.priority).toBe('high');
  expect('priority' in buildTodoQuery(1, { priority: 'urgent' }).where).toBe(false);
});

test('sorts ascending and descending', () => {
  expect(buildTodoQuery(1, { sort: 'title' }).orderBy).toEqual({ title: 'asc' });
  expect(buildTodoQuery(1, { sort: '-priority' }).orderBy).toEqual({ priority: 'desc' });
});

test('rejects unknown sort fields', () => {
  expect(buildTodoQuery(1, { sort: 'passwordHash' }).orderBy).toEqual({ createdAt: 'desc' });
  expect(buildTodoQuery(1, { sort: '-' }).orderBy).toEqual({ createdAt: 'desc' });
});

test('combines filters', () => {
  expect(buildTodoQuery(3, { done: 'false', q: 'tax', priority: 'low', sort: 'createdAt' })).toEqual({
    where: { ownerId: 3, done: false, title: { contains: 'tax', mode: 'insensitive' }, priority: 'low' },
    orderBy: { createdAt: 'asc' },
  });
});
