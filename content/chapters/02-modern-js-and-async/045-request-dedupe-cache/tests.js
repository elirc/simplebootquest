function setup({ fail = false } = {}) {
  let t = 0;
  const calls = [];
  const fetcher = (key) => {
    calls.push(key);
    return new Promise((res, rej) => setTimeout(() => (fail ? rej(new Error('down')) : res(`value:${key}:${calls.length}`)), 5));
  };
  const cache = createCache(fetcher, { ttlMs: 1000, now: () => t });
  return { cache, calls, advance: (ms) => (t += ms) };
}

test('deduplicates concurrent requests', async () => {
  const { cache, calls } = setup();
  const [a, b, c] = await Promise.all([cache.get('me'), cache.get('me'), cache.get('me')]);
  expect(calls).toEqual(['me']);
  expect(a).toBe(b);
  expect(b).toBe(c);
});

test('caches until the ttl expires', async () => {
  const { cache, calls, advance } = setup();
  await cache.get('me');
  advance(500);
  await cache.get('me');
  expect(calls).toHaveLength(1);
  advance(600);
  await cache.get('me');
  expect(calls).toHaveLength(2);
});

test('invalidate forces a refetch', async () => {
  const { cache, calls } = setup();
  await cache.get('me');
  cache.invalidate('me');
  await cache.get('me');
  expect(calls).toHaveLength(2);
});

test('failures are not cached', async () => {
  const { cache, calls } = setup({ fail: true });
  await expect(cache.get('me')).rejects.toThrow('down');
  await expect(cache.get('me')).rejects.toThrow('down');
  expect(calls).toHaveLength(2);
});
