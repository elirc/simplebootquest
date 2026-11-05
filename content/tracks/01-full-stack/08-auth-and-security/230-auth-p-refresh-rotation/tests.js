function setup() {
  let n = 0;
  return createRefreshStore({ newToken: () => `rt${++n}` });
}
test('rotation returns a new token', () => {
  const store = setup();
  const t1 = store.issue(42);
  expect(store.rotate(t1)).toEqual({ ok: true, userId: 42, token: 'rt2' });
  expect(store.rotate('rt2')).toEqual({ ok: true, userId: 42, token: 'rt3' });
});
test('unknown token', () => expect(setup().rotate('nope')).toEqual({ ok: false, reason: 'invalid' }));
test('reuse revokes the whole family', () => {
  const store = setup();
  const t1 = store.issue(42);
  const { token: t2 } = store.rotate(t1);
  expect(store.rotate(t1)).toEqual({ ok: false, reason: 'reuse detected' });
  expect(store.rotate(t2)).toEqual({ ok: false, reason: 'invalid' });
});
test('other families are unaffected', () => {
  const store = setup();
  const laptop = store.issue(42);
  const phone = store.issue(42);
  store.rotate(laptop);
  store.rotate(laptop);
  expect(store.rotate(phone).ok).toBe(true);
});
