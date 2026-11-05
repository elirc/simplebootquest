const create = async (item) => {
  if (!item.title) throw new Error('title is required');
  return { id: item.title.length, ...item };
};
test('all succeed', async () => {
  const r = await runBulk([{ title: 'a' }, { title: 'bb' }], create);
  expect(r).toEqual({
    status: 200,
    results: [{ index: 0, ok: true, data: { id: 1, title: 'a' } }, { index: 1, ok: true, data: { id: 2, title: 'bb' } }],
    succeeded: 2,
    failed: 0,
  });
});
test('partial failure is 207', async () => {
  const r = await runBulk([{ title: 'a' }, {}, { title: 'c' }], create);
  expect(r.status).toBe(207);
  expect(r.results[1]).toEqual({ index: 1, ok: false, error: 'title is required' });
  expect([r.succeeded, r.failed]).toEqual([2, 1]);
});
test('total failure is 422', async () => expect((await runBulk([{}, {}], create)).status).toBe(422));
test('empty list', async () => expect(await runBulk([], create)).toEqual({ status: 200, results: [], succeeded: 0, failed: 0 }));
test('limits batch size before doing work', async () => {
  const handler = vi.fn(create);
  await expect(runBulk([{ title: 'a' }, { title: 'b' }, { title: 'c' }], handler, { maxItems: 2 })).rejects.toThrow('Too many items (max 2)');
  expect(handler).not.toHaveBeenCalled();
});
test('runs sequentially', async () => {
  let running = 0;
  let maxRunning = 0;
  await runBulk([1, 2, 3], async () => {
    running++;
    maxRunning = Math.max(maxRunning, running);
    await sleep(2);
    running--;
  });
  expect(maxRunning).toBe(1);
});
