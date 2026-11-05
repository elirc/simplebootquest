test('creates getters', () => {
  const user = { name: 'Ada', age: 36 };
  const g = makeGetters(user);
  expect(g.getName()).toBe('Ada');
  expect(g.getAge()).toBe(36);
});
test('reads the live value', () => {
  const state = { count: 1 };
  const g = makeGetters(state);
  state.count = 5;
  expect(g.getCount()).toBe(5);
});
