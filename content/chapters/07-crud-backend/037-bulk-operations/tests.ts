function fakeRepo() {
  const rows = new Map([[1, { id: 1 }]]);
  let nextId = 2;
  const notFound = () => Object.assign(new Error('Not found'), { status: 404 });
  return {
    rows,
    async create(data) { if (!data?.title) throw Object.assign(new Error('Title is required'), { status: 400 }); const row = { id: nextId++, ...data }; rows.set(row.id, row); return row; },
    async update(id, data) { if (!rows.has(id)) throw notFound(); rows.set(id, { ...rows.get(id), ...data }); },
    async delete(id) { if (!rows.delete(id)) throw notFound(); },
  };
}

test('mixed results', async () => {
  const repo = fakeRepo();
  const out = await runBulk([
    { op: 'create', data: { title: 'a' } },
    { op: 'update', id: 1, data: { done: true } },
    { op: 'delete', id: 999 },
    { op: 'create', data: {} },
    { op: 'explode' },
    { op: 'delete', id: 2 },
  ], repo);
  expect(out.results).toEqual([
    { index: 0, status: 201, id: 2 },
    { index: 1, status: 200 },
    { index: 2, status: 404, error: 'Not found' },
    { index: 3, status: 400, error: 'Title is required' },
    { index: 4, status: 400, error: 'Unknown operation' },
    { index: 5, status: 204 },
  ]);
  expect(out.succeeded).toBe(3);
  expect(out.failed).toBe(3);
});

test('caps the batch size', async () => {
  await expect(runBulk(Array(101).fill({ op: 'delete', id: 1 }), fakeRepo())).rejects.toThrow('Too many operations');
});
