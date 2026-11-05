const USERS = [
  { id: 1, name: 'Ada', email: 'ada@x.io', passwordHash: 'h1', bio: 'math' },
  { id: 2, name: 'Linus', email: 'l@x.io', passwordHash: 'h2' },
];
const ALLOWED = ['id', 'name', 'email', 'bio'];
test('selected fields plus id', () => expect(selectFields(USERS, 'name', ALLOWED)).toEqual([{ id: 1, name: 'Ada' }, { id: 2, name: 'Linus' }]));
test('defaults to allowed fields only', () => expect(selectFields(USERS, undefined, ALLOWED)).toEqual([
  { id: 1, name: 'Ada', email: 'ada@x.io', bio: 'math' },
  { id: 2, name: 'Linus', email: 'l@x.io' },
]));
test('ignores fields that are not allowed', () => expect(selectFields(USERS, 'passwordHash,email', ALLOWED)).toEqual([{ id: 1, email: 'ada@x.io' }, { id: 2, email: 'l@x.io' }]));
test('order follows allowed', () => expect(Object.keys(selectFields(USERS, 'bio, name', ALLOWED)[0])).toEqual(['id', 'name', 'bio']));
test('does not mutate', () => {
  selectFields(USERS, 'name', ALLOWED);
  expect(USERS[0].passwordHash).toBe('h1');
});
