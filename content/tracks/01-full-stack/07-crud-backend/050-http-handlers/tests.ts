function mockRes() {
  const res = { statusCode: 200, body: undefined, ended: false };
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (body) => { res.body = body; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

function fakeService() {
  const calls = [];
  const todo = { id: 1, title: 'x' };
  return {
    calls,
    async list(userId) { calls.push(['list', userId]); return [todo]; },
    async get(userId, id) { calls.push(['get', userId, id]); if (id === 404) throw new NotFoundError('Todo not found'); return todo; },
    async create(userId, body) { calls.push(['create', userId, body]); if (!body.title) throw new ValidationError('Title is required'); return { id: 2, ...body }; },
    async update(userId, id, body) { calls.push(['update', userId, id, body]); return { ...todo, ...body }; },
    async remove(userId, id) { calls.push(['remove', userId, id]); if (id === 500) throw new Error('db down'); },
  };
}

const user = { id: 42 };

test('list returns data', async () => {
  const service = fakeService();
  const res = mockRes();
  await createTodoHandlers(service).list({ user }, res);
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ data: [{ id: 1, title: 'x' }] });
  expect(service.calls[0]).toEqual(['list', 42]);
});

test('get parses the id', async () => {
  const service = fakeService();
  const res = mockRes();
  await createTodoHandlers(service).get({ user, params: { id: '1' } }, res);
  expect(res.statusCode).toBe(200);
  expect(service.calls[0]).toEqual(['get', 42, 1]);
});

test('invalid ids return 400 without calling the service', async () => {
  for (const id of ['abc', '0', '-1', '1.5']) {
    const service = fakeService();
    const res = mockRes();
    await createTodoHandlers(service).get({ user, params: { id } }, res);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: 'Invalid id' });
    expect(service.calls).toEqual([]);
  }
});

test('NotFoundError becomes 404', async () => {
  const res = mockRes();
  await createTodoHandlers(fakeService()).get({ user, params: { id: '404' } }, res);
  expect(res.statusCode).toBe(404);
  expect(res.body).toEqual({ error: 'Todo not found' });
});

test('create returns 201', async () => {
  const res = mockRes();
  await createTodoHandlers(fakeService()).create({ user, body: { title: 'new' } }, res);
  expect(res.statusCode).toBe(201);
  expect(res.body).toEqual({ id: 2, title: 'new' });
});

test('ValidationError becomes 400', async () => {
  const res = mockRes();
  await createTodoHandlers(fakeService()).create({ user, body: {} }, res);
  expect(res.statusCode).toBe(400);
  expect(res.body).toEqual({ error: 'Title is required' });
});

test('update passes the body through', async () => {
  const service = fakeService();
  const res = mockRes();
  await createTodoHandlers(service).update({ user, params: { id: '1' }, body: { done: true } }, res);
  expect(res.body).toEqual({ id: 1, title: 'x', done: true });
  expect(service.calls[0]).toEqual(['update', 42, 1, { done: true }]);
});

test('remove returns 204 and ends the response', async () => {
  const res = mockRes();
  await createTodoHandlers(fakeService()).remove({ user, params: { id: '1' } }, res);
  expect(res.statusCode).toBe(204);
  expect(res.ended).toBe(true);
});

test('unexpected errors are rethrown', async () => {
  await expect(createTodoHandlers(fakeService()).remove({ user, params: { id: '500' } }, mockRes())).rejects.toThrow('db down');
});
