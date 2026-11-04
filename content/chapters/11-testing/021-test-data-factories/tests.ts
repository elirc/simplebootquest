const buildUser = createFactory((n) => ({
  id: n,
  email: `user${n}@example.com`,
  role: 'member',
  address: { street: '1 Main St', city: 'London' },
}));

test('sequences and defaults', () => {
  buildUser.reset();
  expect(buildUser()).toEqual({ id: 1, email: 'user1@example.com', role: 'member', address: { street: '1 Main St', city: 'London' } });
  expect(buildUser().email).toBe('user2@example.com');
});

test('overrides, merged one level deep', () => {
  buildUser.reset();
  const u = buildUser({ role: 'admin', address: { city: 'Paris' } });
  expect(u.role).toBe('admin');
  expect(u.address).toEqual({ street: '1 Main St', city: 'Paris' });
});

test('buildList', () => {
  buildUser.reset();
  const users = buildList(buildUser, 3, { role: 'editor' });
  expect(users.map((u) => u.id)).toEqual([1, 2, 3]);
  expect(users.every((u) => u.role === 'editor')).toBe(true);
});
