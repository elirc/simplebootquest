function job(statuses) {
  let i = 0;
  return async () => ({ status: statuses[Math.min(i++, statuses.length - 1)] });
}

test('resolves when done', async () => {
  const result = await pollUntil(job(['queued', 'running', 'done']), (j) => j.status === 'done', { intervalMs: 5, timeoutMs: 1000 });
  expect(result).toEqual({ status: 'done' });
});

test('rejects when the job fails', async () => {
  await expect(
    pollUntil(job(['running', 'failed']), (j) => j.status === 'done', { intervalMs: 5, timeoutMs: 1000, isFailed: (j) => j.status === 'failed' }),
  ).rejects.toThrow('Job failed');
});

test('times out', async () => {
  await expect(pollUntil(job(['running']), (j) => j.status === 'done', { intervalMs: 10, timeoutMs: 45 })).rejects.toThrow('Timed out');
});

test('checks immediately', async () => {
  let calls = 0;
  await pollUntil(async () => ++calls, () => true, { intervalMs: 1000, timeoutMs: 5000 });
  expect(calls).toBe(1);
});
