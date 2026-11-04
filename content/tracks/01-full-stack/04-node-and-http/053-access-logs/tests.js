const time = new Date('2026-03-05T10:04:09Z');

test('commonLog', () => {
  expect(commonLog({ ip: '127.0.0.1', user: 'ada', time, method: 'GET', path: '/todos', status: 200, bytes: 1234 })).toBe(
    '127.0.0.1 - ada [05/Mar/2026:10:04:09 +0000] "GET /todos HTTP/1.1" 200 1234',
  );
  expect(commonLog({ ip: '::1', time, method: 'DELETE', path: '/x', status: 204 })).toBe('::1 - - [05/Mar/2026:10:04:09 +0000] "DELETE /x HTTP/1.1" 204 -');
});

test('jsonLog never leaks secrets', () => {
  const line = jsonLog({ time, method: 'POST', path: '/login', status: 401, ms: 12, body: { password: 'hunter2' }, headers: { cookie: 'sid=1' } });
  expect(JSON.parse(line)).toEqual({ time: '2026-03-05T10:04:09.000Z', method: 'POST', path: '/login', status: 401, ms: 12 });
  expect(line).not.toContain('hunter2');
});

test('parseCommonLog', () => {
  expect(parseCommonLog('10.0.0.1 - - [05/Mar/2026:10:04:09 +0000] "POST /api/todos HTTP/1.1" 201 87')).toEqual({
    ip: '10.0.0.1', user: null, method: 'POST', path: '/api/todos', status: 201, bytes: 87,
  });
  expect(parseCommonLog('garbage')).toBeNull();
});
