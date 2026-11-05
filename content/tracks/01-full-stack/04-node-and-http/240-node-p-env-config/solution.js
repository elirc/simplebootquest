function loadConfig(env) {
  const port = env.PORT === undefined || env.PORT === '' ? 3000 : Number(env.PORT);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be a number between 1 and 65535');
  const nodeEnv = env.NODE_ENV || 'development';
  if (!['development', 'test', 'production'].includes(nodeEnv)) throw new Error('NODE_ENV must be development, test or production');
  if (!env.DATABASE_URL) throw new Error('DATABASE_URL is required');
  const debug = ['true', '1'].includes(String(env.DEBUG ?? '').toLowerCase());
  const corsOrigins = (env.CORS_ORIGINS ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  return Object.freeze({ port, nodeEnv, databaseUrl: env.DATABASE_URL, debug, corsOrigins });
}
