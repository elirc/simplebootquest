const good = {
  DATABASE_URL: 'postgresql://app:app@localhost:5432/app',
  JWT_SECRET: 'x'.repeat(32),
};

test('loads a minimal config with defaults', () => {
  expect(loadConfig(good)).toEqual({
    databaseUrl: good.DATABASE_URL,
    jwtSecret: good.JWT_SECRET,
    port: 3001,
    nodeEnv: 'development',
    corsOrigins: [],
    isProduction: false,
  });
});

test('parses optional values', () => {
  const config = loadConfig({ ...good, PORT: '8080', NODE_ENV: 'production', CORS_ORIGINS: 'https://a.com, https://b.com,,' });
  expect(config.port).toBe(8080);
  expect(config.isProduction).toBe(true);
  expect(config.corsOrigins).toEqual(['https://a.com', 'https://b.com']);
});

test('reports missing required values', () => {
  expect(() => loadConfig({})).toThrow('Invalid configuration:\nDATABASE_URL is required\nJWT_SECRET is required');
  expect(() => loadConfig({ ...good, JWT_SECRET: '' })).toThrow('JWT_SECRET is required');
});

test('validates formats', () => {
  expect(() => loadConfig({ ...good, DATABASE_URL: 'mysql://x' })).toThrow('DATABASE_URL must be a postgres URL');
  expect(() => loadConfig({ ...good, JWT_SECRET: 'short' })).toThrow('JWT_SECRET must be at least 32 characters');
});

test('validates the port', () => {
  for (const PORT of ['0', '70000', 'abc', '3.5']) {
    expect(() => loadConfig({ ...good, PORT })).toThrow('PORT must be an integer between 1 and 65535');
  }
});

test('validates NODE_ENV', () => {
  expect(() => loadConfig({ ...good, NODE_ENV: 'staging' })).toThrow('NODE_ENV must be one of: development, test, production');
});

test('lists every problem at once', () => {
  try {
    loadConfig({ PORT: 'x', NODE_ENV: 'prod' });
    throw new Error('should throw');
  } catch (err) {
    expect(err.message.split('\n')).toHaveLength(5);
  }
});
