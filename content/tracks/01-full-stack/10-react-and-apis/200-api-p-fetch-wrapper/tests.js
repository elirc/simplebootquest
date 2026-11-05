function response(status, body, statusText = '') {
  return {
    status,
    statusText,
    ok: status >= 200 && status < 300,
    json: async () => {
      if (typeof body === 'string') throw new SyntaxError('Unexpected token');
      return body;
    },
  };
}
test('GET sends cookies and parses JSON', async () => {
  const fetchImpl = vi.fn(async () => response(200, [{ id: 1 }]));
  const request = createApi(fetchImpl, 'https://api.test');
  expect(await request('/todos')).toEqual([{ id: 1 }]);
  expect(fetchImpl).toHaveBeenCalledWith('https://api.test/todos', { method: 'GET', credentials: 'include', headers: { Accept: 'application/json' } });
});
test('POST sends JSON', async () => {
  const fetchImpl = vi.fn(async () => response(201, { id: 2 }));
  await createApi(fetchImpl, '')('/todos', { method: 'POST', body: { title: 'Milk' } });
  expect(fetchImpl).toHaveBeenCalledWith('/todos', {
    method: 'POST',
    credentials: 'include',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: '{"title":"Milk"}',
  });
});
test('204 resolves null', async () => expect(await createApi(async () => response(204), '')('/todos/1', { method: 'DELETE' })).toBeNull());
test('errors carry the status and server message', async () => {
  const request = createApi(async () => response(404, { error: { code: 'NOT_FOUND', message: 'Todo not found' } }, 'Not Found'), '');
  let err;
  try { await request('/todos/9'); } catch (e) { err = e; }
  expect(err instanceof ApiError).toBe(true);
  expect([err.status, err.message]).toEqual([404, 'Todo not found']);
});
test('string errors and non-JSON bodies', async () => {
  await expect(createApi(async () => response(400, { error: 'Bad input' }), '')('/x')).rejects.toThrow('Bad input');
  await expect(createApi(async () => response(502, '<html>Bad Gateway</html>', 'Bad Gateway'), '')('/x')).rejects.toThrow('Bad Gateway');
});
test('network failures', async () => {
  let err;
  try { await createApi(async () => { throw new TypeError('Failed to fetch'); }, '')('/x'); } catch (e) { err = e; }
  expect([err.status, err.message]).toEqual([0, 'Network error']);
});
