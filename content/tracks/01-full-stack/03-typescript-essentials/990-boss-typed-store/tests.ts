interface Post {
  id: number;
  title: string;
  published: boolean;
  views: number;
}

function seeded() {
  const repo = createRepository<Post>();
  repo.create({ title: 'B', published: true, views: 10 });
  repo.create({ title: 'A', published: false, views: 50 });
  repo.create({ title: 'C', published: true, views: 30 });
  return repo;
}

test('create assigns ids', () => {
  const repo = createRepository<Post>();
  expect(repo.create({ title: 'x', published: false, views: 0 })).toEqual({ id: 1, title: 'x', published: false, views: 0 });
  expect(repo.create({ title: 'y', published: false, views: 0 }).id).toBe(2);
});

test('findById returns copies', () => {
  const repo = seeded();
  const post = repo.findById(1);
  post.title = 'changed';
  expect(repo.findById(1).title).toBe('B');
  expect(repo.findById(99)).toBeUndefined();
});

test('findMany filters with where', () => {
  expect(seeded().findMany({ where: { published: true } }).map((p) => p.title)).toEqual(['B', 'C']);
});

test('findMany sorts and limits', () => {
  const repo = seeded();
  expect(repo.findMany({ orderBy: { field: 'views', direction: 'desc' } }).map((p) => p.views)).toEqual([50, 30, 10]);
  expect(repo.findMany({ orderBy: { field: 'title', direction: 'asc' }, limit: 2 }).map((p) => p.title)).toEqual(['A', 'B']);
});

test('update patches and keeps the id', () => {
  const repo = seeded();
  expect(repo.update(2, { published: true })).toEqual({ id: 2, title: 'A', published: true, views: 50 });
  expect(repo.findById(2).published).toBe(true);
});

test('update throws NotFoundError for missing ids', () => {
  const repo = seeded();
  expect(() => repo.update(99, { title: 'x' })).toThrow(NotFoundError);
  expect(() => repo.update(99, { title: 'x' })).toThrow('Record 99 not found');
});

test('delete removes records and throws for missing ones', () => {
  const repo = seeded();
  repo.delete(1);
  expect(repo.findById(1)).toBeUndefined();
  expect(() => repo.delete(1)).toThrow(NotFoundError);
});

test('count supports where', () => {
  const repo = seeded();
  expect(repo.count()).toBe(3);
  expect(repo.count({ published: true })).toBe(2);
});

test('NotFoundError has the right name', () => {
  const err = new NotFoundError(5);
  expect(err).toBeInstanceOf(Error);
  expect(err.name).toBe('NotFoundError');
});
