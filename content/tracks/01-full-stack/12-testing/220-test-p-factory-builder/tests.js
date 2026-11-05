const users = defineFactory((n) => ({
  id: n,
  email: `user${n}@test.io`,
  role: 'member',
  settings: { theme: 'light', notifications: { email: true, push: false } },
  tags: ['new'],
}));
beforeEach(() => users.reset());
test('sequence numbers', () => {
  expect(users.build().email).toBe('user1@test.io');
  expect(users.build().id).toBe(2);
});
test('overrides', () => expect(users.build({ role: 'admin' })).toMatchObject({ id: 1, role: 'admin', email: 'user1@test.io' }));
test('deep merge of nested objects', () => {
  expect(users.build({ settings: { notifications: { push: true } } }).settings).toEqual({ theme: 'light', notifications: { email: true, push: true } });
});
test('arrays replace', () => expect(users.build({ tags: ['vip'] }).tags).toEqual(['vip']));
test('buildList', () => {
  const list = users.buildList(3, { role: 'admin' });
  expect(list.map((u) => [u.id, u.role])).toEqual([[1, 'admin'], [2, 'admin'], [3, 'admin']]);
});
test('buildList with a function', () => {
  expect(users.buildList(2, (i) => ({ role: i === 0 ? 'owner' : 'member' })).map((u) => u.role)).toEqual(['owner', 'member']);
});
test('builds are independent', () => {
  const a = users.build();
  a.settings.theme = 'dark';
  expect(users.build().settings.theme).toBe('light');
});
