const empty = Object.freeze({ todos: Object.freeze([]), nextId: 1 });
function withTodos() {
  return Object.freeze({
    todos: Object.freeze([
      Object.freeze({ id: 1, title: 'a', done: false }),
      Object.freeze({ id: 2, title: 'b', done: true }),
      Object.freeze({ id: 3, title: 'c', done: false }),
    ]),
    nextId: 4,
  });
}
test('adds a trimmed todo and increments nextId', () => {
  const s = todosReducer(empty, { type: 'add', title: '  Milk ' });
  expect(s).toEqual({ todos: [{ id: 1, title: 'Milk', done: false }], nextId: 2 });
  expect(todosReducer(s, { type: 'add', title: 'Eggs' }).todos[1].id).toBe(2);
});
test('blank titles return the same state', () => {
  expect(todosReducer(empty, { type: 'add', title: '   ' }) === empty).toBe(true);
});
test('toggle flips only the matching todo', () => {
  const s = todosReducer(withTodos(), { type: 'toggle', id: 2 });
  expect(s.todos.map((t) => t.done)).toEqual([false, false, false]);
  expect(todosReducer(withTodos(), { type: 'toggle', id: 1 }).todos.map((t) => t.done)).toEqual([true, true, false]);
});
test('remove', () => expect(todosReducer(withTodos(), { type: 'remove', id: 1 }).todos.map((t) => t.id)).toEqual([2, 3]));
test('clearDone', () => expect(todosReducer(withTodos(), { type: 'clearDone' }).todos.map((t) => t.id)).toEqual([1, 3]));
test('keeps nextId on other actions', () => expect(todosReducer(withTodos(), { type: 'remove', id: 1 }).nextId).toBe(4));
test('unknown actions return the same state', () => {
  const s = withTodos();
  expect(todosReducer(s, { type: 'nope' }) === s).toBe(true);
});
