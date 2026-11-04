const ada = { id: 1, name: 'Ada', email: 'ada@x.io', passwordHash: '$2b$12$secret', role: 'member', createdAt: new Date('2026-01-01T00:00:00Z'), lastLoginAt: null };
const post = { id: 10, title: 'Hi', body: 'text', published: true, author: ada, comments: [{}, {}], internalScore: 99 };

test('public view', () => {
  expect(serializeUser(ada, null)).toEqual({ id: 1, name: 'Ada', joinedAt: '2026-01-01T00:00:00.000Z' });
});

test('self and admin views', () => {
  expect(serializeUser(ada, { id: 1, role: 'member' })).toEqual({ id: 1, name: 'Ada', joinedAt: '2026-01-01T00:00:00.000Z', email: 'ada@x.io' });
  expect(serializeUser(ada, { id: 2, role: 'admin' })).toMatchObject({ email: 'ada@x.io', role: 'member', lastLoginAt: null });
});

test('never leaks the hash', () => {
  for (const viewer of [null, { id: 1, role: 'member' }, { id: 2, role: 'admin' }]) {
    expect(JSON.stringify(serializeUser(ada, viewer))).not.toContain('secret');
  }
});

test('posts', () => {
  expect(serializePost(post, null)).toEqual({ id: 10, title: 'Hi', body: 'text', author: { id: 1, name: 'Ada', joinedAt: '2026-01-01T00:00:00.000Z' }, commentCount: 2 });
  const draft = { ...post, published: false };
  expect(serializePost(draft, null)).toBeNull();
  expect(serializePost(draft, { id: 3, role: 'member' })).toBeNull();
  expect(serializePost(draft, { id: 1, role: 'member' })).not.toBeNull();
  expect(serializePost(draft, { id: 3, role: 'admin' })).not.toBeNull();
});
