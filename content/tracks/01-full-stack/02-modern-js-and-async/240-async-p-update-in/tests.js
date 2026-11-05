const state = Object.freeze({ users: Object.freeze([Object.freeze({ name: 'ada', tags: Object.freeze([]) }), Object.freeze({ name: 'grace' })]), count: 1 });
test('updates deep values immutably', () => {
  const next = updateIn(state, ['users', 0, 'name'], (n) => n.toUpperCase());
  expect(next.users[0].name).toBe('ADA');
  expect(Array.isArray(next.users)).toBe(true);
  expect(next.users[1]).toBe(state.users[1]);
  expect(state.users[0].name).toBe('ada');
});
test('top-level', () => expect(updateIn(state, ['count'], (c) => c + 1).count).toBe(2));
