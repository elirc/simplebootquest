test('succeeds once the condition holds', async () => {
  let n = 0;
  expect(await retryUntil(async () => ++n, (v) => v >= 3, { attempts: 5, delayMs: 1 })).toBe(3);
});
test('errors count as attempts', async () => {
  let n = 0;
  const fn = async () => { n++; if (n < 3) throw new Error('flaky'); return 'ok'; };
  expect(await retryUntil(fn, () => true, { attempts: 3, delayMs: 1 })).toBe('ok');
});
test('gives up with the cause', async () => {
  const err = new Error('still down');
  try {
    await retryUntil(async () => { throw err; }, () => true, { attempts: 2, delayMs: 1 });
    throw new Error('should reject');
  } catch (e) {
    expect(e.message).toBe('Gave up after 2 attempts');
    expect(e.cause).toBe(err);
  }
});
