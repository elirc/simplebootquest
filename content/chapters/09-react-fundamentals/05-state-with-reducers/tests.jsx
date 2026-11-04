const initial = { todos: [], filter: 'all' };

function deepFreeze(obj) {
  Object.values(obj).forEach((v) => typeof v === 'object' && v !== null && deepFreeze(v));
  return Object.freeze(obj);
}

function run(actions, start = initial) {
  return actions.reduce((s, a) => todosReducer(deepFreeze(s), a), start);
}

test('adds todos', () => {
  const s = run([{ type: 'added', id: 1, title: ' Learn ' }, { type: 'added', id: 2, title: 'Build' }]);
  expect(s.todos).toEqual([{ id: 1, title: 'Learn', done: false }, { id: 2, title: 'Build', done: false }]);
});

test('ignores empty titles', () => {
  expect(run([{ type: 'added', id: 1, title: '   ' }]).todos).toEqual([]);
});

test('toggles, renames and deletes without mutating', () => {
  const s = run([
    { type: 'added', id: 1, title: 'a' },
    { type: 'added', id: 2, title: 'b' },
    { type: 'toggled', id: 1 },
    { type: 'renamed', id: 2, title: 'B!' },
    { type: 'renamed', id: 2, title: '' },
  ]);
  expect(s.todos).toEqual([{ id: 1, title: 'a', done: true }, { id: 2, title: 'B!', done: false }]);
  expect(run([{ type: 'deleted', id: 1 }], s).todos).toEqual([{ id: 2, title: 'B!', done: false }]);
});

test('clears done todos', () => {
  const s = run([
    { type: 'added', id: 1, title: 'a' },
    { type: 'added', id: 2, title: 'b' },
    { type: 'toggled', id: 2 },
    { type: 'cleared_done' },
  ]);
  expect(s.todos.map((t) => t.id)).toEqual([1]);
});

test('unknown actions return the same object', () => {
  const s = deepFreeze({ todos: [], filter: 'all' });
  expect(todosReducer(s, { type: 'nope' })).toBe(s);
});

test('returns new objects for changes', () => {
  const s = deepFreeze({ todos: [{ id: 1, title: 'a', done: false }], filter: 'all' });
  const next = todosReducer(s, { type: 'toggled', id: 1 });
  expect(next).not.toBe(s);
  expect(next.todos).not.toBe(s.todos);
});

test('selectVisible derives the visible list', () => {
  const s = run([
    { type: 'added', id: 1, title: 'a' },
    { type: 'added', id: 2, title: 'b' },
    { type: 'toggled', id: 1 },
  ]);
  expect(selectVisible(s).map((t) => t.id)).toEqual([1, 2]);
  expect(selectVisible(run([{ type: 'filter_changed', filter: 'active' }], s)).map((t) => t.id)).toEqual([2]);
  expect(selectVisible(run([{ type: 'filter_changed', filter: 'done' }], s)).map((t) => t.id)).toEqual([1]);
});
