function mockRes() {
  const res = { statusCode: 200, body: undefined, sent: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.json = (b) => { res.body = b; res.sent = true; return res; };
  res.send = (b) => { res.body = b; res.sent = true; return res; };
  return res;
}

async function request(app, method, url) {
  const res = mockRes();
  await app.handle({ method, url }, res);
  return res;
}

function buildApp() {
  const app = createApp();
  const log = [];
  app.use((req, res, next) => { log.push(`${req.method} ${req.path}`); next(); });
  app.use('/admin', (req, res, next) => (req.query.token === 'secret' ? next() : res.status(401).json({ error: 'Unauthorized' })));
  app.get('/todos', (req, res) => res.json({ todos: [], page: req.query.page ?? '1' }));
  app.get('/todos/:id', (req, res) => res.json({ id: req.params.id }));
  app.post('/todos', async (req, res) => { await sleep(1); res.status(201).json({ created: true }); });
  app.get('/admin/stats', (req, res) => res.json({ users: 3 }));
  app.get('/boom', () => { throw new Error('kaboom'); });
  app.get('/async-boom', async () => { throw new Error('async kaboom'); });
  app.get('/next-err', (req, res, next) => next(new Error('passed along')));
  return { app, log };
}

test('routes with params and query', async () => {
  const { app, log } = buildApp();
  expect((await request(app, 'GET', '/todos?page=2')).body).toEqual({ todos: [], page: '2' });
  expect((await request(app, 'GET', '/todos/42')).body).toEqual({ id: '42' });
  expect(log).toEqual(['GET /todos', 'GET /todos/42']);
});

test('method matters and async handlers work', async () => {
  const { app } = buildApp();
  const res = await request(app, 'POST', '/todos');
  expect(res.statusCode).toBe(201);
  expect((await request(app, 'DELETE', '/todos')).statusCode).toBe(404);
});

test('prefix middleware', async () => {
  const { app } = buildApp();
  expect((await request(app, 'GET', '/admin/stats')).statusCode).toBe(401);
  expect((await request(app, 'GET', '/admin/stats?token=secret')).body).toEqual({ users: 3 });
  expect((await request(app, 'GET', '/administrator')).statusCode).toBe(404);
});

test('errors reach the default handler', async () => {
  const { app } = buildApp();
  for (const path of ['/boom', '/async-boom', '/next-err']) {
    const res = await request(app, 'GET', path);
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ error: 'Internal Server Error' });
  }
});

test('custom error handlers', async () => {
  const { app } = buildApp();
  app.use((err, req, res, next) => res.status(418).json({ error: err.message }));
  expect((await request(app, 'GET', '/boom')).body).toEqual({ error: 'kaboom' });
  expect((await request(app, 'GET', '/next-err')).statusCode).toBe(418);
});
