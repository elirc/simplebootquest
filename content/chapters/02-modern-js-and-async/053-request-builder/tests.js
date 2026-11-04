test('simple GET', () => {
  expect(buildRequest('https://api.test', { path: '/todos' })).toEqual({
    url: 'https://api.test/todos',
    init: { method: 'GET', headers: { Accept: 'application/json' } },
  });
});

test('query parameters skip empty values', () => {
  const { url } = buildRequest('https://api.test', { path: '/todos', query: { done: false, page: 2, q: undefined, tag: null } });
  expect(url).toBe('https://api.test/todos?done=false&page=2');
});

test('JSON body and token', () => {
  const { init } = buildRequest('https://api.test', { method: 'POST', path: '/todos', body: { title: 'x' }, token: 'abc' });
  expect(init).toEqual({
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: 'Bearer abc' },
    body: '{"title":"x"}',
  });
});
