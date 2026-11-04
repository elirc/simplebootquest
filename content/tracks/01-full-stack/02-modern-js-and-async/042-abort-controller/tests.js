test('sleep resolves normally', async () => {
  await expect(sleep(5, new AbortController().signal)).resolves.toBeUndefined();
});

test('sleep rejects when aborted', async () => {
  const c = new AbortController();
  const p = sleep(1000, c.signal);
  c.abort();
  try {
    await p;
    throw new Error('should reject');
  } catch (err) {
    expect(err.name).toBe('AbortError');
  }
});

test('sleep rejects immediately for an aborted signal', async () => {
  const c = new AbortController();
  c.abort();
  await expect(sleep(1000, c.signal)).rejects.toThrow('Aborted');
});

test('a new search aborts the previous one', async () => {
  const searchFn = async (q, signal) => {
    await sleep(q === 'slow' ? 100 : 10, signal);
    return `results for ${q}`;
  };
  const search = createSearcher(searchFn);
  const first = search('slow');
  const second = search('fast');
  expect(await second).toBe('results for fast');
  expect(await first).toBeNull();
});
