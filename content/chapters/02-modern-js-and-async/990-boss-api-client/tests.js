function recorder(responses) {
  const calls = [];
  const queue = [...responses];
  const fetchFn = async (url, options) => {
    calls.push({ url, options });
    const next = queue.length > 1 ? queue.shift() : queue[0];
    return {
      ok: next.status >= 200 && next.status < 300,
      status: next.status,
      json: async () => {
        if (next.body === undefined) throw new SyntaxError('Unexpected end of JSON input');
        return next.body;
      },
    };
  };
  return { fetchFn, calls };
}

test('list sends GET to the collection', async () => {
  const { fetchFn, calls } = recorder([{ status: 200, body: [{ id: 1 }] }]);
  const api = createApiClient('https://api.test', fetchFn);
  expect(await api.list('todos')).toEqual([{ id: 1 }]);
  expect(calls[0].url).toBe('https://api.test/todos');
  expect(calls[0].options.method).toBe('GET');
});

test('get sends GET to the item', async () => {
  const { fetchFn, calls } = recorder([{ status: 200, body: { id: 7 } }]);
  const api = createApiClient('https://api.test', fetchFn);
  expect(await api.get('todos', 7)).toEqual({ id: 7 });
  expect(calls[0].url).toBe('https://api.test/todos/7');
});

test('create sends a JSON POST', async () => {
  const { fetchFn, calls } = recorder([{ status: 201, body: { id: 2, title: 'x' } }]);
  const api = createApiClient('https://api.test', fetchFn);
  expect(await api.create('todos', { title: 'x' })).toEqual({ id: 2, title: 'x' });
  expect(calls[0].options.method).toBe('POST');
  expect(calls[0].options.headers['Content-Type']).toBe('application/json');
  expect(JSON.parse(calls[0].options.body)).toEqual({ title: 'x' });
});

test('update sends a JSON PATCH', async () => {
  const { fetchFn, calls } = recorder([{ status: 200, body: { id: 2, done: true } }]);
  const api = createApiClient('https://api.test', fetchFn);
  await api.update('todos', 2, { done: true });
  expect(calls[0].url).toBe('https://api.test/todos/2');
  expect(calls[0].options.method).toBe('PATCH');
  expect(JSON.parse(calls[0].options.body)).toEqual({ done: true });
});

test('remove handles 204 No Content', async () => {
  const { fetchFn, calls } = recorder([{ status: 204 }]);
  const api = createApiClient('https://api.test', fetchFn);
  expect(await api.remove('todos', 2)).toBeNull();
  expect(calls[0].options.method).toBe('DELETE');
});

test('throws ApiError with status and body', async () => {
  const { fetchFn } = recorder([{ status: 404, body: { error: 'Not found' } }]);
  const api = createApiClient('https://api.test', fetchFn);
  try {
    await api.get('todos', 99);
    throw new Error('should have thrown');
  } catch (err) {
    expect(err).toBeInstanceOf(ApiError);
    expect(err.status).toBe(404);
    expect(err.body).toEqual({ error: 'Not found' });
    expect(err.message).toBe('GET https://api.test/todos/99 failed with 404');
  }
});

test('error body is null when it is not JSON', async () => {
  const { fetchFn } = recorder([{ status: 400 }]);
  const api = createApiClient('https://api.test', fetchFn);
  await expect(api.create('todos', {})).rejects.toBeInstanceOf(ApiError);
  try {
    await api.create('todos', {});
  } catch (err) {
    expect(err.body).toBeNull();
  }
});

test('retries GET on 5xx errors', async () => {
  const { fetchFn, calls } = recorder([{ status: 503 }, { status: 502 }, { status: 200, body: [] }]);
  const api = createApiClient('https://api.test', fetchFn);
  expect(await api.list('todos')).toEqual([]);
  expect(calls).toHaveLength(3);
});

test('gives up after 3 GET attempts', async () => {
  const { fetchFn, calls } = recorder([{ status: 500 }]);
  const api = createApiClient('https://api.test', fetchFn);
  await expect(api.list('todos')).rejects.toThrow('failed with 500');
  expect(calls).toHaveLength(3);
});

test('does not retry 4xx or non-GET requests', async () => {
  const notFound = recorder([{ status: 404 }]);
  await expect(createApiClient('', notFound.fetchFn).list('x')).rejects.toThrow();
  expect(notFound.calls).toHaveLength(1);

  const serverError = recorder([{ status: 500 }]);
  await expect(createApiClient('', serverError.fetchFn).create('x', {})).rejects.toThrow();
  expect(serverError.calls).toHaveLength(1);
});
