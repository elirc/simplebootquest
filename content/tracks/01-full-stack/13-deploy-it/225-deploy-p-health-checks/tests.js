const healthy = (name, critical = true) => ({ name, critical, run: async () => {} });
const failing = (name, critical, msg) => ({ name, critical, run: async () => { throw new Error(msg); } });
const hanging = (name, critical) => ({ name, critical, run: () => new Promise(() => {}) });
test('all healthy', async () => {
  const r = await runChecks([healthy('db'), healthy('cache', false)], { timeoutMs: 50 });
  expect(r.status).toBe('ok');
  expect(r.checks.db.ok).toBe(true);
  expect(typeof r.checks.db.ms).toBe('number');
  expect(httpStatus(r)).toBe(200);
});
test('non-critical failure is degraded', async () => {
  const r = await runChecks([healthy('db'), failing('email', false, 'SMTP refused')], { timeoutMs: 50 });
  expect(r.status).toBe('degraded');
  expect(r.checks.email).toMatchObject({ ok: false, error: 'SMTP refused' });
  expect(httpStatus(r)).toBe(200);
});
test('critical failure is down', async () => {
  const r = await runChecks([failing('db', true, 'ECONNREFUSED'), failing('email', false, 'x')], { timeoutMs: 50 });
  expect(r.status).toBe('down');
  expect(httpStatus(r)).toBe(503);
});
test('hanging checks time out', async () => {
  const r = await runChecks([hanging('db', true)], { timeoutMs: 30 });
  expect(r.checks.db).toMatchObject({ ok: false, error: 'timeout' });
  expect(r.status).toBe('down');
});
test('checks run in parallel', async () => {
  const slow = (name) => ({ name, critical: true, run: () => sleep(60) });
  const start = Date.now();
  await runChecks([slow('a'), slow('b'), slow('c')], { timeoutMs: 200 });
  expect(Date.now() - start < 150).toBe(true);
});
