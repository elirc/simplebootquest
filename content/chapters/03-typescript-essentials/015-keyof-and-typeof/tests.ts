const users = [
  { id: 2, name: 'Grace', email: 'g@x.io' },
  { id: 1, name: 'Ada', email: 'a@x.io' },
];

test('pluck', () => expect(pluck(users, 'email')).toEqual(['g@x.io', 'a@x.io']));

test('sortBy', () => {
  expect(sortBy(users, 'id').map((u) => u.id)).toEqual([1, 2]);
  expect(sortBy(users, 'name', 'desc').map((u) => u.name)).toEqual(['Grace', 'Ada']);
  expect(users[0].id).toBe(2);
});

test('pick and omit', () => {
  expect(pick(users[0], ['id', 'name'])).toEqual({ id: 2, name: 'Grace' });
  expect(omit(users[0], ['email'])).toEqual({ id: 2, name: 'Grace' });
  expect(users[0].email).toBe('g@x.io');
});
