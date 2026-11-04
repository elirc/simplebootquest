function flaky(failures, error = new Error('flaky')) {
  let calls = 0;
  return async () => {
    calls++;
    if (calls <= failures) throw error;
    return `ok after ${calls}`;
  };
}

test('retries with exponential delays', async () => {
  const delays = [];
  const result = await retry(flaky(3), { retries: 3, baseMs: 100, sleep: async (ms) => delays.push(ms) });
  expect(result).toBe('ok after 4');
  expect(delays).toEqual([100, 200, 400]);
});

test('gives up after the retries are used', async () => {
  const delays = [];
  await expect(retry(flaky(10), { retries: 2, sleep: async (ms) => delays.push(ms) })).rejects.toThrow('flaky');
  expect(delays).toHaveLength(2);
});

test('does not retry when shouldRetry says no', async () => {
  const err = Object.assign(new Error('bad request'), { status: 400 });
  const delays = [];
  await expect(
    retry(flaky(1, err), { shouldRetry: (e) => e.status >= 500, sleep: async (ms) => delays.push(ms) }),
  ).rejects.toThrow('bad request');
  expect(delays).toEqual([]);
});

test('passes the attempt number', async () => {
  const seen = [];
  await retry(async (n) => { seen.push(n); if (n < 2) throw new Error('x'); }, { sleep: async () => {} });
  expect(seen).toEqual([1, 2]);
});
