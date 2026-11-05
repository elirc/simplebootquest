test('matches method and path, fills params', async () => {
  const router = createRouter();
  const seen = [];
  router.get('/todos/:id', (req) => seen.push(['get', req.params.id])).delete('/todos/:id', (req) => seen.push(['delete', req.params.id]));
  expect(await router.handle({ method: 'DELETE', path: '/todos/42' }, {})).toBe(true);
  expect(seen).toEqual([['delete', '42']]);
});
test('returns false when nothing matches', async () => {
  const router = createRouter().get('/todos', () => {});
  expect(await router.handle({ method: 'POST', path: '/todos' }, {})).toBe(false);
  expect(await router.handle({ method: 'GET', path: '/users' }, {})).toBe(false);
});
test('runs a chain while next() is called', async () => {
  const log = [];
  const router = createRouter().post(
    '/todos',
    async (req, res, next) => { await sleep(1); log.push('auth'); next(); },
    (req, res, next) => { log.push('validate'); next(); },
    (req, res) => { log.push('create'); res.status = 201; },
  );
  const res = {};
  await router.handle({ method: 'POST', path: '/todos' }, res);
  expect(log).toEqual(['auth', 'validate', 'create']);
  expect(res.status).toBe(201);
});
test('stops when next is not called', async () => {
  const last = vi.fn();
  const router = createRouter().get('/admin', (req, res) => { res.status = 403; }, last);
  await router.handle({ method: 'GET', path: '/admin' }, {});
  expect(last).not.toHaveBeenCalled();
});
test('errors propagate', async () => {
  const router = createRouter()
    .get('/a', async () => { throw new Error('db down'); })
    .get('/b', (req, res, next) => next(new Error('bad')));
  await expect(router.handle({ method: 'GET', path: '/a' }, {})).rejects.toThrow('db down');
  await expect(router.handle({ method: 'GET', path: '/b' }, {})).rejects.toThrow('bad');
});
