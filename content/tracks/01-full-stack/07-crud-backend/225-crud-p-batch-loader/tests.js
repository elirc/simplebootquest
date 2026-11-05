const USERS = [{ id: 1, name: 'Ada' }, { id: 2, name: 'Grace' }, { id: 3, name: 'Linus' }];
test('batches calls made together into one query', async () => {
  const batchFn = vi.fn(async (ids) => USERS.filter((u) => ids.includes(u.id)).reverse());
  const loader = createLoader(batchFn);
  const result = await Promise.all([loader.load(2), loader.load(1), loader.load(2)]);
  expect(result.map((u) => u.name)).toEqual(['Grace', 'Ada', 'Grace']);
  expect(batchFn).toHaveBeenCalledTimes(1);
  expect(batchFn).toHaveBeenCalledWith([2, 1]);
});
test('missing records resolve to null', async () => {
  const loader = createLoader(async (ids) => USERS.filter((u) => ids.includes(u.id)));
  expect(await Promise.all([loader.load(3), loader.load(99)])).toEqual([{ id: 3, name: 'Linus' }, null]);
});
test('later calls start a new batch', async () => {
  const batchFn = vi.fn(async (ids) => USERS.filter((u) => ids.includes(u.id)));
  const loader = createLoader(batchFn);
  await loader.load(1);
  await loader.load(2);
  expect(batchFn).toHaveBeenCalledTimes(2);
});
test('errors reject the whole batch', async () => {
  const loader = createLoader(async () => { throw new Error('db down'); });
  const a = loader.load(1);
  const b = loader.load(2);
  await expect(a).rejects.toThrow('db down');
  await expect(b).rejects.toThrow('db down');
});
test('solves N+1 for a list of posts', async () => {
  const batchFn = vi.fn(async (ids) => USERS.filter((u) => ids.includes(u.id)));
  const loader = createLoader(batchFn);
  const posts = [{ authorId: 1 }, { authorId: 2 }, { authorId: 1 }, { authorId: 3 }];
  const authors = await Promise.all(posts.map((p) => loader.load(p.authorId)));
  expect(authors.map((a) => a.name)).toEqual(['Ada', 'Grace', 'Ada', 'Linus']);
  expect(batchFn).toHaveBeenCalledTimes(1);
});
