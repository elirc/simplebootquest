const BASE = { DATABASE_URL: 'postgres://localhost/app' };
test('defaults', () => expect(loadConfig(BASE)).toEqual({ port: 3000, nodeEnv: 'development', databaseUrl: 'postgres://localhost/app', debug: false, corsOrigins: [] }));
test('parses values', () => {
  const c = loadConfig({ ...BASE, PORT: '8080', NODE_ENV: 'production', DEBUG: 'TRUE', CORS_ORIGINS: 'https://a.com, https://b.com,' });
  expect(c.port).toBe(8080);
  expect(c.nodeEnv).toBe('production');
  expect(c.debug).toBe(true);
  expect(c.corsOrigins).toEqual(['https://a.com', 'https://b.com']);
});
test('debug is strict', () => {
  expect(loadConfig({ ...BASE, DEBUG: 'false' }).debug).toBe(false);
  expect(loadConfig({ ...BASE, DEBUG: '1' }).debug).toBe(true);
});
test('bad port', () => {
  expect(() => loadConfig({ ...BASE, PORT: 'abc' })).toThrow('PORT must be a number between 1 and 65535');
  expect(() => loadConfig({ ...BASE, PORT: '70000' })).toThrow('PORT');
  expect(() => loadConfig({ ...BASE, PORT: '80.5' })).toThrow('PORT');
});
test('bad NODE_ENV', () => expect(() => loadConfig({ ...BASE, NODE_ENV: 'staging' })).toThrow('NODE_ENV must be'));
test('missing DATABASE_URL', () => expect(() => loadConfig({})).toThrow('DATABASE_URL is required'));
test('frozen', () => expect(Object.isFrozen(loadConfig(BASE))).toBe(true));
