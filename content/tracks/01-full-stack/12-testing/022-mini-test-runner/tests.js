test('runs nested tests with full names and hook order', async () => {
  const r = createRunner();
  const log = [];
  r.describe('todos', () => {
    r.beforeEach(() => log.push('outer before'));
    r.afterEach(() => log.push('outer after'));
    r.it('creates', () => log.push('test creates'));
    r.describe('when logged out', () => {
      r.beforeEach(async () => { await sleep(1); log.push('inner before'); });
      r.afterEach(() => log.push('inner after'));
      r.it('rejects', () => log.push('test rejects'));
    });
  });
  const results = await r.run();
  expect(results).toEqual([
    { name: 'todos > creates', passed: true },
    { name: 'todos > when logged out > rejects', passed: true },
  ]);
  expect(log).toEqual([
    'outer before', 'test creates', 'outer after',
    'outer before', 'inner before', 'test rejects', 'inner after', 'outer after',
  ]);
});

test('failures are reported and afterEach still runs', async () => {
  const r = createRunner();
  const log = [];
  r.describe('suite', () => {
    r.afterEach(() => log.push('cleanup'));
    r.it('fails', async () => { throw new Error('boom'); });
    r.it('passes', () => {});
  });
  expect(await r.run()).toEqual([
    { name: 'suite > fails', passed: false, error: 'boom' },
    { name: 'suite > passes', passed: true },
  ]);
  expect(log).toEqual(['cleanup', 'cleanup']);
});

test('a failing beforeEach skips the body', async () => {
  const r = createRunner();
  let ran = false;
  r.beforeEach(() => { throw new Error('setup failed'); });
  r.it('top-level test', () => { ran = true; });
  expect(await r.run()).toEqual([{ name: 'top-level test', passed: false, error: 'setup failed' }]);
  expect(ran).toBe(false);
});
