function setup() {
  let t = 0;
  const cache = createCache({ staleMs: 1000, now: () => t });
  return { cache, advance: (ms) => (t += ms) };
}
test('miss then fresh hit', async () => {
  const { cache } = setup();
  const fetcher = vi.fn(async () => ['a']);
  expect(await cache.get('todos', fetcher)).toEqual({ data: ['a'], fromCache: false });
  expect(await cache.get('todos', fetcher)).toEqual({ data: ['a'], fromCache: true });
  expect(fetcher).toHaveBeenCalledTimes(1);
});
test('stale data is returned while revalidating', async () => {
  const { cache, advance } = setup();
  let version = 1;
  const fetcher = vi.fn(async () => `v${version}`);
  await cache.get('k', fetcher);
  version = 2;
  advance(1500);
  expect(await cache.get('k', fetcher)).toEqual({ data: 'v1', fromCache: true });
  await sleep(0);
  expect(fetcher).toHaveBeenCalledTimes(2);
  expect(await cache.get('k', fetcher)).toEqual({ data: 'v2', fromCache: true });
});
test('dedupes concurrent fetches', async () => {
  const { cache } = setup();
  const fetcher = vi.fn(async () => { await sleep(5); return 42; });
  const [a, b] = await Promise.all([cache.get('x', fetcher), cache.get('x', fetcher)]);
  expect([a.data, b.data]).toEqual([42, 42]);
  expect(fetcher).toHaveBeenCalledTimes(1);
});
test('failed background refresh keeps old data', async () => {
  const { cache, advance } = setup();
  await cache.get('k', async () => 'good');
  advance(2000);
  await cache.get('k', async () => { throw new Error('offline'); });
  await sleep(0);
  expect((await cache.get('k', async () => 'unused')).data).toBe('good');
});
test('failed first fetch rejects and caches nothing', async () => {
  const { cache } = setup();
  await expect(cache.get('k', async () => { throw new Error('500'); })).rejects.toThrow('500');
  expect(await cache.get('k', async () => 'ok')).toEqual({ data: 'ok', fromCache: false });
});
