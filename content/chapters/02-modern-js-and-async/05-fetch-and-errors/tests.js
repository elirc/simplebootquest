function fakeFetch(routes) {
  return async (url) => {
    const route = routes[url];
    if (!route) return { ok: false, status: 404, json: async () => ({ error: 'Not found' }) };
    return { ok: true, status: 200, json: async () => route };
  };
}

test('HttpError is an Error with a status', () => {
  const err = new HttpError(418, "I'm a teapot");
  expect(err).toBeInstanceOf(Error);
  expect(err.name).toBe('HttpError');
  expect(err.status).toBe(418);
  expect(err.message).toBe("I'm a teapot");
});

test('getJSON returns parsed data', async () => {
  const fetchFn = fakeFetch({ '/api/todos': [{ id: 1 }] });
  expect(await getJSON('/api/todos', fetchFn)).toEqual([{ id: 1 }]);
});

test('getJSON throws HttpError for non-ok responses', async () => {
  const fetchFn = fakeFetch({});
  try {
    await getJSON('/api/missing', fetchFn);
    throw new Error('should have thrown');
  } catch (err) {
    expect(err).toBeInstanceOf(HttpError);
    expect(err.status).toBe(404);
    expect(err.message).toBe('Request to /api/missing failed with 404');
  }
});

test('safeParseJSON parses valid JSON', () => {
  expect(safeParseJSON('{"a":1}')).toEqual({ ok: true, value: { a: 1 } });
});

test('safeParseJSON never throws', () => {
  const r = safeParseJSON('{nope');
  expect(r.ok).toBe(false);
  expect(typeof r.error).toBe('string');
});
