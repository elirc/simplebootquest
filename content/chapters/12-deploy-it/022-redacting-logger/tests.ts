function setup(level) {
  const lines = [];
  const logger = createLogger({ level, write: (l) => lines.push(JSON.parse(l)) });
  return { logger, lines };
}

test('levels filter output', () => {
  const { logger, lines } = setup('warn');
  logger.info('ignored');
  logger.warn('careful');
  logger.error('bad');
  expect(lines.map((l) => l.level)).toEqual(['warn', 'error']);
});

test('redacts sensitive keys at any depth', () => {
  const { logger, lines } = setup();
  logger.info('login', { email: 'a@b.co', password: 'hunter2', headers: { Authorization: 'Bearer x', 'X-Api-Token': 't' }, users: [{ secretKey: 's', name: 'n' }] });
  expect(lines[0]).toEqual({
    level: 'info', msg: 'login', email: 'a@b.co', password: '[REDACTED]',
    headers: { Authorization: '[REDACTED]', 'X-Api-Token': '[REDACTED]' },
    users: [{ secretKey: '[REDACTED]', name: 'n' }],
  });
});

test('serializes errors', () => {
  const { logger, lines } = setup();
  logger.error('failed', { err: new TypeError('nope') });
  expect(lines[0].err).toEqual({ name: 'TypeError', message: 'nope' });
});

test('child loggers add bindings', () => {
  const { logger, lines } = setup();
  const reqLog = logger.child({ requestId: 'r1' }).child({ userId: 7 });
  reqLog.info('hi', { x: 1 });
  expect(lines[0]).toEqual({ level: 'info', msg: 'hi', requestId: 'r1', userId: 7, x: 1 });
});
