test('cancel rejects even if the original resolves later', async () => {
  const c = makeCancellable(new Promise((r) => setTimeout(() => r('late'), 20)));
  c.cancel();
  try {
    await c.promise;
    throw new Error('should reject');
  } catch (err) {
    expect(err.name).toBe('CancelError');
  }
});
test('not cancelled passes through', async () => {
  expect(await makeCancellable(Promise.resolve(5)).promise).toBe(5);
});
test('latestOnly drops stale results', async () => {
  const search = latestOnly(async (q, ms) => { await sleep(ms); return `results:${q}`; });
  const slow = search('re', 40);
  const fast = search('react', 5);
  expect(await fast).toBe('results:react');
  expect(await slow).toBeUndefined();
});
