const TODOS = [{ id: 2, title: 'B', done: false }, { id: 1, title: 'A', done: true }];
test('normalize', () => {
  expect(normalize(TODOS)).toEqual({ byId: { 1: TODOS[1], 2: TODOS[0] }, ids: [2, 1] });
  expect(normalize([])).toEqual({ byId: {}, ids: [] });
});
test('selectAll keeps order', () => expect(selectAll(normalize(TODOS)).map((t) => t.title)).toEqual(['B', 'A']));
test('upsert merges and appends', () => {
  const s = upsertMany(normalize(TODOS), [{ id: 1, done: false }, { id: 3, title: 'C', done: false }]);
  expect(selectAll(s)).toEqual([
    { id: 2, title: 'B', done: false },
    { id: 1, title: 'A', done: false },
    { id: 3, title: 'C', done: false },
  ]);
});
test('immutability', () => {
  const s = Object.freeze(normalize(TODOS));
  const frozenById = s.byId;
  upsertMany(s, [{ id: 2, title: 'changed' }]);
  removeOne(s, 2);
  expect(frozenById[2].title).toBe('B');
  expect(s.ids).toEqual([2, 1]);
});
test('removeOne', () => {
  const s = removeOne(normalize(TODOS), 2);
  expect(s).toEqual({ byId: { 1: TODOS[1] }, ids: [1] });
  const same = normalize(TODOS);
  expect(removeOne(same, 99) === same).toBe(true);
});
