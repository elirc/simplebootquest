test('type only', () => expect(parseContentType('text/html')).toEqual({ type: 'text/html', params: {} }));
test('with charset', () => expect(parseContentType('Application/JSON; Charset=UTF-8')).toEqual({ type: 'application/json', params: { charset: 'UTF-8' } }));
test('quoted values', () => expect(parseContentType('multipart/form-data; boundary="----abc"')).toEqual({ type: 'multipart/form-data', params: { boundary: '----abc' } }));
test('invalid', () => {
  expect(parseContentType(undefined)).toBeNull();
  expect(parseContentType('json')).toBeNull();
});
test('isJson', () => {
  expect(isJson('application/json; charset=utf-8')).toBe(true);
  expect(isJson('application/problem+json')).toBe(true);
  expect(isJson('APPLICATION/JSON')).toBe(true);
  expect(isJson('text/plain')).toBe(false);
  expect(isJson(undefined)).toBe(false);
});
