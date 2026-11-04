test('forwards async errors to next', async () => {
  const errors = [];
  const handler = asyncHandler(async () => { throw new Error('db down'); });
  await handler({}, {}, (err) => errors.push(err.message));
  expect(errors).toEqual(['db down']);
});

test('forwards sync throws too', async () => {
  const errors = [];
  await asyncHandler(() => { throw new Error('sync'); })({}, {}, (err) => errors.push(err.message));
  expect(errors).toEqual(['sync']);
});

test('successful handlers do not call next', async () => {
  let nextCalls = 0;
  let sent;
  await asyncHandler(async (req, res) => { sent = 'ok'; })({}, {}, () => nextCalls++);
  expect(sent).toBe('ok');
  expect(nextCalls).toBe(0);
});

test('wrapRouter', async () => {
  const errors = [];
  const routes = wrapRouter({ 'GET /x': async () => { throw new Error('x failed'); } });
  await routes['GET /x']({}, {}, (e) => errors.push(e.message));
  expect(errors).toEqual(['x failed']);
});
