test('batches loads from the same tick', async () => {
  const calls = [];
  const loader = createLoader(async (ids) => { calls.push(ids); return ids.map((id) => ({ id, name: `user${id}` })); });
  const [a, b, c] = await Promise.all([loader.load(1), loader.load(2), loader.load(1)]);
  expect(calls).toEqual([[1, 2]]);
  expect(a).toEqual({ id: 1, name: 'user1' });
  expect(b.name).toBe('user2');
  expect(c).toEqual(a);
});
test('separate ticks make separate batches', async () => {
  const calls = [];
  const loader = createLoader(async (ids) => { calls.push(ids); return ids; });
  await loader.load(1);
  await loader.load(2);
  expect(calls).toEqual([[1], [2]]);
});
test('errors reject every waiter', async () => {
  const loader = createLoader(async () => { throw new Error('db down'); });
  const results = await Promise.allSettled([loader.load(1), loader.load(2)]);
  expect(results.map((r) => r.status)).toEqual(['rejected', 'rejected']);
});
