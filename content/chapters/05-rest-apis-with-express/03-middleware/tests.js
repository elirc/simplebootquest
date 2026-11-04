function mockRes() {
  const res = { statusCode: 200, body: undefined };
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (body) => {
    res.body = body;
    return res;
  };
  return res;
}

test('runs middlewares in order', async () => {
  const order = [];
  const run = compose([
    (req, res, next) => { order.push(1); next(); },
    (req, res, next) => { order.push(2); next(); },
    (req, res, next) => { order.push(3); next(); },
  ]);
  await run({}, {});
  expect(order).toEqual([1, 2, 3]);
});

test('stops when next is not called', async () => {
  const order = [];
  const run = compose([
    (req, res, next) => { order.push(1); },
    (req, res, next) => { order.push(2); next(); },
  ]);
  await run({}, {});
  expect(order).toEqual([1]);
});

test('supports async middleware and shared req', async () => {
  const run = compose([
    async (req, res, next) => { await sleep(5); req.user = 'ada'; await next(); },
    (req, res, next) => { req.seen = req.user; next(); },
  ]);
  const req = {};
  await run(req, {});
  expect(req.seen).toBe('ada');
});

test('next(err) rejects and skips the rest', async () => {
  const order = [];
  const run = compose([
    (req, res, next) => next(new Error('nope')),
    (req, res, next) => { order.push('should not run'); next(); },
  ]);
  await expect(run({}, {})).rejects.toThrow('nope');
  expect(order).toEqual([]);
});

test('requireJson rejects non-JSON bodies', () => {
  const res = mockRes();
  let called = false;
  requireJson({ method: 'POST', headers: { 'content-type': 'text/plain' } }, res, () => (called = true));
  expect(called).toBe(false);
  expect(res.statusCode).toBe(415);
  expect(res.body).toEqual({ error: 'Content-Type must be application/json' });
});

test('requireJson allows JSON and GET requests', () => {
  let calls = 0;
  requireJson({ method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' } }, mockRes(), () => calls++);
  requireJson({ method: 'GET', headers: {} }, mockRes(), () => calls++);
  expect(calls).toBe(2);
});

test('requestTimer uses the injected clock', () => {
  const req = {};
  let called = false;
  requestTimer(() => 1234)(req, {}, () => (called = true));
  expect(req.startTime).toBe(1234);
  expect(called).toBe(true);
});
