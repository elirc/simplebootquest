function fakeRepo() {
  const rows = [
    { id: 1, title: 'Ada 1', done: false, userId: 1 },
    { id: 2, title: 'Grace 1', done: false, userId: 2 },
    { id: 3, title: 'Ada 2', done: true, userId: 1 },
  ];
  const matches = (where) => (r) => Object.entries(where).every(([k, v]) => r[k] === v);
  return {
    rows,
    findMany: (where) => rows.filter(matches(where)),
    findOne: (where) => rows.find(matches(where)) ?? null,
    insert: (data) => { const row = { id: rows.length + 1, ...data }; rows.push(row); return row; },
    update: (id, data) => Object.assign(rows.find((r) => r.id === id), data),
    remove: vi.fn((id) => { rows.splice(rows.findIndex((r) => r.id === id), 1); return true; }),
  };
}
test('list only returns own todos', () => expect(createTodoService(fakeRepo()).list(1).map((t) => t.id)).toEqual([1, 3]));
test('get checks ownership with a 404', () => {
  const svc = createTodoService(fakeRepo());
  expect(svc.get(1, 3).title).toBe('Ada 2');
  let err;
  try { svc.get(1, 2); } catch (e) { err = e; }
  expect(err instanceof NotFoundError).toBe(true);
  expect(err.status).toBe(404);
});
test('create takes the owner from the session', () => {
  const svc = createTodoService(fakeRepo());
  expect(svc.create(1, { title: 'New', userId: 2, done: true })).toEqual({ id: 4, title: 'New', done: false, userId: 1 });
});
test('update cannot touch other users\' todos or change the owner', () => {
  const repo = fakeRepo();
  const svc = createTodoService(repo);
  expect(() => svc.update(1, 2, { title: 'pwned' })).toThrow('Todo not found');
  expect(repo.rows[1].title).toBe('Grace 1');
  svc.update(1, 1, { done: true, userId: 2 });
  expect(repo.rows[0]).toEqual({ id: 1, title: 'Ada 1', done: true, userId: 1 });
});
test('remove checks ownership', () => {
  const repo = fakeRepo();
  const svc = createTodoService(repo);
  expect(() => svc.remove(2, 1)).toThrow('Todo not found');
  expect(repo.remove).not.toHaveBeenCalled();
  svc.remove(2, 2);
  expect(repo.remove).toHaveBeenCalledWith(2);
});
