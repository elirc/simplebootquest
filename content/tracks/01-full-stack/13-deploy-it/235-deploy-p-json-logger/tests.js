function setup(opts = {}) {
  const lines = [];
  const logger = createLogger({ now: () => 'T', write: (l) => lines.push(l), ...opts });
  return { logger, lines, parsed: () => lines.map((l) => JSON.parse(l)) };
}
test('writes one JSON object per line', () => {
  const { logger, lines } = setup();
  logger.info('server started', { port: 3000 });
  expect(lines).toEqual(['{"time":"T","level":"info","msg":"server started","port":3000}']);
});
test('filters by level', () => {
  const { logger, parsed } = setup({ level: 'warn' });
  logger.debug('a');
  logger.info('b');
  logger.warn('c');
  logger.error('d');
  expect(parsed().map((l) => l.msg)).toEqual(['c', 'd']);
});
test('default level is info', () => {
  const { logger, lines } = setup();
  logger.debug('hidden');
  expect(lines).toEqual([]);
});
test('serialises errors', () => {
  const { logger, parsed } = setup();
  const err = new TypeError('bad thing');
  logger.error('request failed', { err });
  const line = parsed()[0];
  expect(line.err.name).toBe('TypeError');
  expect(line.err.message).toBe('bad thing');
  expect(typeof line.err.stack).toBe('string');
});
test('child loggers add context', () => {
  const { logger, parsed } = setup({ base: { service: 'api' } });
  const reqLog = logger.child({ requestId: 'r1' });
  reqLog.info('handled', { status: 200 });
  logger.info('plain');
  expect(parsed()).toEqual([
    { time: 'T', level: 'info', msg: 'handled', service: 'api', requestId: 'r1', status: 200 },
    { time: 'T', level: 'info', msg: 'plain', service: 'api' },
  ]);
});
