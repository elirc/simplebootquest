test('only the user by default', () => expect(buildWhere(7, {})).toEqual({ userId: 7 }));
test('text search', () => {
  expect(buildWhere(7, { q: '  milk ' })).toEqual({ userId: 7, title: { contains: 'milk', mode: 'insensitive' } });
  expect(buildWhere(7, { q: '   ' })).toEqual({ userId: 7 });
});
test('done flag', () => {
  expect(buildWhere(7, { done: 'false' })).toEqual({ userId: 7, done: false });
  expect(buildWhere(7, { done: 'true' }).done).toBe(true);
  expect(buildWhere(7, { done: 'yes' })).toEqual({ userId: 7 });
});
test('date range', () => {
  expect(buildWhere(7, { from: '2026-01-01', to: '2026-02-01' }).createdAt).toEqual({ gte: new Date('2026-01-01'), lt: new Date('2026-02-01') });
  expect(buildWhere(7, { to: '2026-02-01' }).createdAt).toEqual({ lt: new Date('2026-02-01') });
  expect(buildWhere(7, { from: 'not a date' })).toEqual({ userId: 7 });
});
test('tags', () => {
  expect(buildWhere(7, { tags: 'home, urgent,' }).tags).toEqual({ some: { name: { in: ['home', 'urgent'] } } });
  expect(buildWhere(7, { tags: ',' })).toEqual({ userId: 7 });
});
test('cannot override the user', () => expect(buildWhere(7, { userId: '1' })).toEqual({ userId: 7 }));
