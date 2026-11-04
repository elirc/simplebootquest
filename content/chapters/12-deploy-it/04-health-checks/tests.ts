function mockRes() {
  const res = { statusCode: 200, body: undefined };
  res.status = (c) => { res.statusCode = c; return res; };
  res.json = (b) => { res.body = b; return res; };
  return res;
}

function fakeClock() {
  let t = 1000;
  return () => (t += 5);
}

test('healthy when every check passes', async () => {
  const res = mockRes();
  await createHealthHandler({ database: async () => 1, cache: async () => 'PONG' }, { timeoutMs: 100, now: fakeClock() })({}, res);
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ status: 'ok', checks: { database: 'up', cache: 'up' }, durationMs: 5 });
});

test('503 when a check throws', async () => {
  const res = mockRes();
  await createHealthHandler(
    { database: async () => { throw new Error('ECONNREFUSED'); }, cache: async () => 1 },
    { timeoutMs: 100, now: fakeClock() },
  )({}, res);
  expect(res.statusCode).toBe(503);
  expect(res.body.status).toBe('error');
  expect(res.body.checks).toEqual({ database: 'down', cache: 'up' });
});

test('hung checks time out', async () => {
  const res = mockRes();
  await createHealthHandler({ database: () => new Promise(() => {}) }, { timeoutMs: 30, now: fakeClock() })({}, res);
  expect(res.statusCode).toBe(503);
  expect(res.body.checks.database).toBe('down');
});

test('runs checks in parallel', async () => {
  const res = mockRes();
  const slow = () => new Promise((r) => setTimeout(r, 60));
  const start = Date.now();
  await createHealthHandler({ a: slow, b: slow, c: slow }, { timeoutMs: 500, now: fakeClock() })({}, res);
  expect(Date.now() - start).toBeLessThan(150);
  expect(res.statusCode).toBe(200);
});

test('no checks means healthy', async () => {
  const res = mockRes();
  await createHealthHandler({}, { timeoutMs: 10, now: fakeClock() })({}, res);
  expect(res.body).toEqual({ status: 'ok', checks: {}, durationMs: 5 });
});
