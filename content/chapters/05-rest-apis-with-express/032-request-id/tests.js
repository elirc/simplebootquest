function setup(headers = {}) {
  let t = 1000;
  const logs = [];
  const listeners = {};
  const res = { statusCode: 200, headers: {}, set(k, v) { this.headers[k] = v; }, on(ev, cb) { listeners[ev] = cb; } };
  const req = { method: 'GET', path: '/todos', headers };
  let nextCalled = false;
  requestContext({ generateId: () => 'gen-1', now: () => t, log: (e) => logs.push(e) })(req, res, () => (nextCalled = true));
  return { req, res, logs, finish: (status, elapsed) => { res.statusCode = status; t += elapsed; listeners.finish(); }, nextCalled };
}

test('generates an id and echoes it', () => {
  const s = setup();
  expect(s.req.id).toBe('gen-1');
  expect(s.res.headers['X-Request-Id']).toBe('gen-1');
  expect(s.nextCalled).toBe(true);
});

test('reuses a safe incoming id', () => {
  expect(setup({ 'x-request-id': 'lb-abc-123' }).req.id).toBe('lb-abc-123');
});

test('ignores unsafe incoming ids', () => {
  expect(setup({ 'x-request-id': 'bad id\nINJECTED LOG LINE' }).req.id).toBe('gen-1');
});

test('logs on finish with timing', () => {
  const s = setup();
  expect(s.logs).toEqual([]);
  s.finish(201, 42);
  expect(s.logs).toEqual([{ id: 'gen-1', method: 'GET', path: '/todos', status: 201, ms: 42 }]);
});
