test('backoff delays double and cap', () => {
  expect(backoffDelays(5, 100, 1000)).toEqual([100, 200, 400, 800, 1000]);
  expect(backoffDelays(0, 100, 1000)).toEqual([]);
});
test('returns the first success', async () => {
  const fn = vi.fn(async () => 'ok');
  expect(await retry(fn, { retries: 3 })).toBe('ok');
  expect(fn).toHaveBeenCalledTimes(1);
});
test('retries until success', async () => {
  const fn = vi.fn(async (attempt) => {
    if (attempt < 3) throw new Error('flaky');
    return 'third time lucky';
  });
  const wait = vi.fn(async () => {});
  expect(await retry(fn, { retries: 5, wait })).toBe('third time lucky');
  expect(fn).toHaveBeenCalledTimes(3);
  expect(wait).toHaveBeenCalledTimes(2);
  expect(wait).toHaveBeenCalledWith(1);
  expect(wait).toHaveBeenCalledWith(2);
});
test('gives up after the retries', async () => {
  const fn = vi.fn(async () => { throw new Error('down'); });
  await expect(retry(fn, { retries: 2 })).rejects.toThrow('down');
  expect(fn).toHaveBeenCalledTimes(3);
});
test('does not retry non-retryable errors', async () => {
  const fn = vi.fn(async () => { throw Object.assign(new Error('bad input'), { status: 400 }); });
  await expect(retry(fn, { retries: 5, shouldRetry: (e) => e.status >= 500 })).rejects.toThrow('bad input');
  expect(fn).toHaveBeenCalledTimes(1);
});
