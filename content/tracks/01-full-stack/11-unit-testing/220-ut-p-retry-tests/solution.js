function failing(times) {
  let calls = 0;
  return vi.fn(async () => {
    calls++;
    if (calls <= times) throw new Error(`fail ${calls}`);
    return 'ok';
  });
}
test('returns the first success without retrying', async () => {
  const fn = failing(0);
  expect(await retry(fn, 3)).toBe('ok');
  expect(fn).toHaveBeenCalledTimes(1);
});
test('retries until it succeeds', async () => {
  const fn = failing(2);
  expect(await retry(fn, 2)).toBe('ok');
  expect(fn).toHaveBeenCalledTimes(3);
});
test('gives up after the retries, with the last error', async () => {
  const fn = failing(10);
  await expect(retry(fn, 2)).rejects.toThrow('fail 3');
  expect(fn).toHaveBeenCalledTimes(3);
});
test('zero retries means one attempt', async () => {
  const fn = failing(10);
  await expect(retry(fn, 0)).rejects.toThrow('fail 1');
  expect(fn).toHaveBeenCalledTimes(1);
});
