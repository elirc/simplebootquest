const clock = new FixedClock(new Date('2026-03-05T09:00:00Z'));

test('logs a successful job', async () => {
  const logger = new MemoryLogger();
  const runner = createJobRunner({ logger, clock });
  expect(await runner.run('backup', async () => 42)).toEqual({ ok: true, value: 42 });
  expect(logger.entries).toEqual([
    { level: 'info', msg: 'backup started at 2026-03-05T09:00:00.000Z' },
    { level: 'info', msg: 'backup finished' },
  ]);
});

test('logs a failed job', async () => {
  const logger = new MemoryLogger();
  const runner = createJobRunner({ logger, clock });
  expect(await runner.run('sync', async () => { throw new Error('timeout'); })).toEqual({ ok: false, error: 'timeout' });
  expect(logger.entries[1]).toEqual({ level: 'error', msg: 'sync failed: timeout' });
});

test('any object with the right shape works', async () => {
  const lines = [];
  const runner = createJobRunner({ logger: { info: (m) => lines.push(m), error: (m) => lines.push(m) }, clock });
  await runner.run('x', async () => 1);
  expect(lines).toHaveLength(2);
});
