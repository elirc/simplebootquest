const wait = (ms, v, fail) => new Promise((res, rej) => setTimeout(() => (fail ? rej(new Error(v)) : res(v)), ms));

test('loadDashboard runs in parallel', async () => {
  const api = { user: () => wait(40, 'ada'), stats: () => wait(40, { n: 1 }), notifications: () => wait(40, []) };
  const start = Date.now();
  expect(await loadDashboard(api)).toEqual({ user: 'ada', stats: { n: 1 }, notifications: [] });
  expect(Date.now() - start).toBeLessThan(110);
});

test('sendAll reports failures', async () => {
  const send = (m) => (m.startsWith('bad') ? Promise.reject(new Error('x')) : Promise.resolve());
  expect(await sendAll(['hi', 'bad1', 'yo', 'bad2'], send)).toEqual({ sent: 2, failed: ['bad1', 'bad2'] });
});

test('fastestMirror uses the first success', async () => {
  const fetchFn = (u) => (u === 'a' ? wait(5, 'a-fail', true) : u === 'b' ? wait(30, 'b') : wait(10, 'c'));
  await expect(fastestMirror(['a', 'b', 'c'], fetchFn)).resolves.toBe('c');
});

test('fastestMirror fails when all fail', async () => {
  await expect(fastestMirror(['x'], () => wait(1, 'x', true))).rejects.toThrow('All mirrors failed');
});
