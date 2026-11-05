test('primary wins when fast', async () => {
  expect(await withFallback(async () => 'fresh', async () => 'cached', 50)).toEqual({ value: 'fresh', source: 'primary' });
});
test('fallback on error', async () => {
  expect(await withFallback(async () => { throw new Error('down'); }, async () => 'cached', 50)).toEqual({ value: 'cached', source: 'fallback' });
});
test('fallback on timeout', async () => {
  expect(await withFallback(() => sleep(100).then(() => 'slow'), async () => 'cached', 10)).toEqual({ value: 'cached', source: 'fallback' });
});
test('both fail', async () => {
  await expect(withFallback(async () => { throw new Error('a'); }, async () => { throw new Error('b'); }, 10)).rejects.toThrow('b');
});
