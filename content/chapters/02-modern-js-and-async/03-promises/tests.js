test('delay resolves with the value', async () => {
  const start = Date.now();
  const value = await delay(30, 'hi');
  expect(value).toBe('hi');
  expect(Date.now() - start).toBeGreaterThanOrEqual(25);
});

test('delay returns a promise', () => {
  expect(delay(1, 1)).toBeInstanceOf(Promise);
});

test('withTimeout passes through fast results', async () => {
  await expect(withTimeout(delay(5, 'fast'), 100)).resolves.toBe('fast');
});

test('withTimeout rejects slow promises', async () => {
  await expect(withTimeout(delay(200, 'slow'), 20)).rejects.toThrow('Timed out');
});

test('withTimeout passes through rejections', async () => {
  await expect(withTimeout(Promise.reject(new Error('boom')), 100)).rejects.toThrow('boom');
});

test('settleAll never rejects and keeps order', async () => {
  const boom = new Error('boom');
  const results = await settleAll([delay(20, 'a'), Promise.reject(boom), Promise.resolve('c')]);
  expect(results).toEqual([
    { ok: true, value: 'a' },
    { ok: false, error: boom },
    { ok: true, value: 'c' },
  ]);
});
