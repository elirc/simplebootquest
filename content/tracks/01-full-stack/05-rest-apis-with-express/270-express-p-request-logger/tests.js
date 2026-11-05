test('no query', () => expect(redactUrl('/todos')).toBe('/todos'));
test('redacts secrets only', () => expect(redactUrl('/reset?token=abc123&step=2')).toBe('/reset?token=[REDACTED]&step=2'));
test('case-insensitive names', () => expect(redactUrl('/x?Password=hunter2&APIKEY=k')).toBe('/x?Password=[REDACTED]&APIKEY=[REDACTED]'));
test('keeps other params as-is', () => expect(redactUrl('/search?q=a%20b&secret=s&page=2')).toBe('/search?q=a%20b&secret=[REDACTED]&page=2'));
test('custom keys', () => expect(redactUrl('/x?code=1&token=2', ['code'])).toBe('/x?code=[REDACTED]&token=2'));
test('logLine', () => {
  expect(logLine({ method: 'GET', url: '/todos?token=t', status: 200, ms: 12.345 })).toBe('GET /todos?token=[REDACTED] 200 12.3ms');
  expect(logLine({ method: 'POST', url: '/todos', status: 201, ms: 3, userId: 42 })).toBe('POST /todos 201 3ms user=42');
});
