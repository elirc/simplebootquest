test('onion order', async () => {
  const log = [];
  const run = compose([
    async (ctx, next) => { log.push('a1'); await next(); log.push('a2'); },
    async (ctx, next) => { log.push('b1'); await next(); log.push('b2'); },
    async () => { log.push('handler'); },
  ]);
  await run({});
  expect(log).toEqual(['a1', 'b1', 'handler', 'b2', 'a2']);
});
test('shares ctx', async () => {
  const ctx = {};
  await compose([async (c, next) => { c.user = 'ada'; await next(); }, async (c) => { c.body = `hi ${c.user}`; }])(ctx);
  expect(ctx.body).toBe('hi ada');
});
test('stops when next is not called', async () => {
  const later = vi.fn();
  await compose([async (ctx) => { ctx.status = 401; }, later])({});
  expect(later).not.toHaveBeenCalled();
});
test('errors can be caught upstream', async () => {
  const ctx = {};
  await compose([
    async (c, next) => { try { await next(); } catch (e) { c.status = 500; c.error = e.message; } },
    async () => { throw new Error('boom'); },
  ])(ctx);
  expect(ctx).toEqual({ status: 500, error: 'boom' });
});
test('next twice is an error', async () => {
  const run = compose([async (ctx, next) => { await next(); await next(); }]);
  await expect(run({})).rejects.toThrow('next() called multiple times');
});
test('empty chain', async () => {
  await expect(compose([])({})).resolves.toBeUndefined();
});
