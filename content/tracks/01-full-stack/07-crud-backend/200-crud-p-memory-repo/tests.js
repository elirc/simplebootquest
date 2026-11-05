function setup() {
  let t = 0;
  const repo = createRepo({ now: () => `T${++t}` });
  repo.create({ title: 'b', done: false, userId: 1 });
  repo.create({ title: 'a', done: true, userId: 1 });
  repo.create({ title: 'c', done: false, userId: 2 });
  return repo;
}
test('create assigns id and timestamps', () => {
  const repo = createRepo({ now: () => 'NOW' });
  expect(repo.create({ title: 'x' })).toEqual({ title: 'x', id: 1, createdAt: 'NOW', updatedAt: 'NOW' });
  expect(repo.create({ title: 'y' }).id).toBe(2);
});
test('findById', () => {
  const repo = setup();
  expect(repo.findById(2).title).toBe('a');
  expect(repo.findById(99)).toBeNull();
});
test('findMany filters, sorts and pages', () => {
  const repo = setup();
  expect(repo.findMany().map((r) => r.title)).toEqual(['b', 'a', 'c']);
  expect(repo.findMany({ where: { userId: 1 } }).map((r) => r.title)).toEqual(['b', 'a']);
  expect(repo.findMany({ where: { userId: 1, done: false } }).map((r) => r.id)).toEqual([1]);
  expect(repo.findMany({ orderBy: { title: 'asc' } }).map((r) => r.title)).toEqual(['a', 'b', 'c']);
  expect(repo.findMany({ orderBy: { title: 'desc' }, skip: 1, take: 1 }).map((r) => r.title)).toEqual(['b']);
});
test('update merges and protects id/createdAt', () => {
  const repo = setup();
  const updated = repo.update(1, { done: true, id: 50, createdAt: 'hacked' });
  expect(updated).toEqual({ title: 'b', done: true, userId: 1, id: 1, createdAt: 'T1', updatedAt: 'T4' });
  expect(repo.update(99, { done: true })).toBeNull();
});
test('delete', () => {
  const repo = setup();
  expect(repo.delete(1)).toBe(true);
  expect(repo.delete(1)).toBe(false);
  expect(repo.findMany().length).toBe(2);
});
test('returns copies', () => {
  const repo = setup();
  repo.findById(1).title = 'mutated';
  repo.findMany()[0].title = 'mutated';
  expect(repo.findById(1).title).toBe('b');
});
