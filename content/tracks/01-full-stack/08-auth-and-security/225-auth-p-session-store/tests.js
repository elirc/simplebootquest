function setup() {
  let t = 0;
  let n = 0;
  const store = createSessionStore({ idleMs: 100, absoluteMs: 250, now: () => t, newId: () => `s${++n}` });
  return { store, advance: (ms) => (t += ms) };
}
test('create and get', () => {
  const { store } = setup();
  const id = store.create(7);
  expect(id).toBe('s1');
  expect(store.get(id)).toEqual({ userId: 7 });
  expect(store.get('nope')).toBeNull();
});
test('idle expiry', () => {
  const { store, advance } = setup();
  const id = store.create(7);
  advance(101);
  expect(store.get(id)).toBeNull();
});
test('sliding: activity keeps it alive', () => {
  const { store, advance } = setup();
  const id = store.create(7);
  advance(80);
  expect(store.get(id)).toEqual({ userId: 7 });
  advance(80);
  expect(store.get(id)).toEqual({ userId: 7 });
});
test('absolute limit wins over activity', () => {
  const { store, advance } = setup();
  const id = store.create(7);
  for (let i = 0; i < 3; i++) { advance(80); store.get(id); }
  advance(20);
  expect(store.get(id)).toBeNull();
});
test('destroy and destroyAllFor', () => {
  const { store } = setup();
  const a = store.create(1);
  const b = store.create(1);
  const c = store.create(2);
  store.destroy(a);
  expect(store.get(a)).toBeNull();
  expect(store.destroyAllFor(1)).toBe(1);
  expect(store.get(b)).toBeNull();
  expect(store.get(c)).toEqual({ userId: 2 });
});
