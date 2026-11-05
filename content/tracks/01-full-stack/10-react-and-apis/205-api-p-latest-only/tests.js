function delayed(value, ms) {
  return () => new Promise((r) => setTimeout(() => r(value), ms));
}
test('a single call', async () => {
  const run = createLatest();
  expect(await run(async () => 'ok')).toEqual({ stale: false, value: 'ok' });
});
test('slow old responses are marked stale', async () => {
  const run = createLatest();
  const first = run(delayed('re', 30));
  const second = run(delayed('react', 5));
  expect(await second).toEqual({ stale: false, value: 'react' });
  expect(await first).toEqual({ stale: true });
});
test('aborts the previous request', async () => {
  const run = createLatest();
  const signals = [];
  const p1 = run(async (signal) => { signals.push(signal); await sleep(10); return 1; });
  const p2 = run(async (signal) => { signals.push(signal); return 2; });
  await Promise.all([p1, p2]);
  expect(signals[0].aborted).toBe(true);
  expect(signals[1].aborted).toBe(false);
});
test('errors from the latest call are thrown', async () => {
  const run = createLatest();
  await expect(run(async () => { throw new Error('500'); })).rejects.toThrow('500');
});
test('errors from stale calls are ignored', async () => {
  const run = createLatest();
  const old = run(async () => { await sleep(10); throw new Error('aborted'); });
  await run(async () => 'new');
  expect(await old).toEqual({ stale: true });
});
