const S = [1, 2];
test('version in the URL', () => {
  expect(resolveVersion({ path: '/v2/todos/5', headers: {} }, S)).toEqual({ version: 2, path: '/todos/5' });
  expect(resolveVersion({ path: '/v1', headers: {} }, S)).toEqual({ version: 1, path: '/' });
});
test('URL wins over headers', () => expect(resolveVersion({ path: '/v1/todos', headers: { 'accept-version': '2' } }, S)).toEqual({ version: 1, path: '/todos' }));
test('Accept-Version header', () => expect(resolveVersion({ path: '/todos', headers: { 'accept-version': '2' } }, S)).toEqual({ version: 2, path: '/todos' }));
test('vendor media type', () => expect(resolveVersion({ path: '/todos', headers: { accept: 'application/vnd.todoapp.v2+json' } }, S)).toEqual({ version: 2, path: '/todos' }));
test('defaults to the lowest version', () => expect(resolveVersion({ path: '/todos', headers: { accept: 'application/json' } }, [3, 2])).toEqual({ version: 2, path: '/todos' }));
test('unsupported versions', () => {
  expect(resolveVersion({ path: '/v9/todos', headers: {} }, S)).toBeNull();
  expect(resolveVersion({ path: '/todos', headers: { 'accept-version': 'latest' } }, S)).toBeNull();
});
test('a path like /videos is not a version', () => expect(resolveVersion({ path: '/videos', headers: {} }, S)).toEqual({ version: 1, path: '/videos' }));
