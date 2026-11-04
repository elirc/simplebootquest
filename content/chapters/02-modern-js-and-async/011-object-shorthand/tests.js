test('makeUser', () => {
  expect(makeUser('Ada', 'a@b.c')).toEqual({ name: 'Ada', email: 'a@b.c', createdAt: 'now' });
});

test('setField returns a new object', () => {
  const form = Object.freeze({ email: '', name: 'x' });
  expect(setField(form, 'email', 'a@b.c')).toEqual({ email: 'a@b.c', name: 'x' });
});

test('toggleFlag', () => {
  expect(toggleFlag({ dark: false, beta: true }, 'dark')).toEqual({ dark: true, beta: true });
  expect(toggleFlag({}, 'newFlag')).toEqual({ newFlag: true });
});

test('fromPairs', () => {
  expect(fromPairs([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 });
  expect(fromPairs([])).toEqual({});
});
