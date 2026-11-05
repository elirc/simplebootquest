async function app(req, res) {
  if (req.path === '/todos' && req.method === 'POST') {
    if (!req.body?.title) return res.status(400).json({ error: 'title required' });
    return res.status(201).set('Location', '/todos/1').json({ id: 1, title: req.body.title });
  }
  if (req.path === '/search') return res.json({ q: req.query.q, page: req.query.page, auth: req.headers.authorization });
  if (req.path === '/boom') throw new Error('kaboom');
  if (req.path === '/later') { await sleep(1); return res.status(204).end(); }
  if (req.path === '/text') return res.send('hello');
}
const request = testRequest(app);
test('POST with a body', async () => {
  expect(await request('POST', '/todos', { body: { title: 'Milk' } })).toEqual({
    status: 201,
    headers: { location: '/todos/1', 'content-type': 'application/json' },
    body: { id: 1, title: 'Milk' },
  });
});
test('validation error', async () => expect((await request('POST', '/todos', { body: {} })).status).toBe(400));
test('query and headers', async () => {
  const res = await request('GET', '/search?q=milk&page=2', { headers: { Authorization: 'Bearer t' } });
  expect(res.body).toEqual({ q: 'milk', page: '2', auth: 'Bearer t' });
});
test('async handlers and end()', async () => expect(await request('GET', '/later')).toEqual({ status: 204, headers: {}, body: undefined }));
test('send text', async () => expect((await request('GET', '/text')).body).toBe('hello'));
test('thrown errors become 500', async () => expect(await request('GET', '/boom')).toEqual({ status: 500, headers: {}, body: { error: 'kaboom' } }));
test('no response is an error', async () => {
  await expect(request('GET', '/nothing')).rejects.toThrow('Handler did not send a response');
});
