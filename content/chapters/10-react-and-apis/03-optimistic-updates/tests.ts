const base = Object.freeze([
  Object.freeze({ id: 1, title: 'a', done: false }),
  Object.freeze({ id: 2, title: 'b', done: false }),
]);

test('optimistic create appends a pending temp item', () => {
  const next = applyOptimistic(base, { kind: 'create', tempId: 'temp-1', data: { title: 'c', done: false } });
  expect(next).toEqual([...base, { id: 'temp-1', title: 'c', done: false, pending: true }]);
});

test('optimistic update marks the item pending', () => {
  const next = applyOptimistic(base, { kind: 'update', id: 2, changes: { done: true } });
  expect(next[1]).toEqual({ id: 2, title: 'b', done: true, pending: true });
  expect(next[0]).toBe(base[0]);
});

test('optimistic delete removes immediately', () => {
  expect(applyOptimistic(base, { kind: 'delete', id: 1 }).map((t) => t.id)).toEqual([2]);
});

test('confirm swaps the temp id for the server record', () => {
  const op = { kind: 'create', tempId: 'temp-1', data: { title: 'c', done: false } };
  const optimistic = applyOptimistic(base, op);
  const confirmed = confirm(optimistic, op, { id: 3, title: 'c', done: false });
  expect(confirmed).toEqual([...base, { id: 3, title: 'c', done: false }]);
});

test('confirm replaces updated items', () => {
  const op = { kind: 'update', id: 2, changes: { done: true } };
  const confirmed = confirm(applyOptimistic(base, op), op, { id: 2, title: 'b', done: true });
  expect(confirmed[1]).toEqual({ id: 2, title: 'b', done: true });
});

test('confirm of a delete changes nothing', () => {
  const op = { kind: 'delete', id: 1 };
  const optimistic = applyOptimistic(base, op);
  expect(confirm(optimistic, op)).toEqual(optimistic);
});

test('rollback restores the snapshot', () => {
  const snapshot = base;
  applyOptimistic(base, { kind: 'delete', id: 1 });
  expect(rollback(snapshot)).toBe(snapshot);
  expect(base).toHaveLength(2);
});
