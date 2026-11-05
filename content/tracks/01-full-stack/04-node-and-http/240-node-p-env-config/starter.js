function loadConfig(env) {
  return { port: env.PORT, nodeEnv: env.NODE_ENV, databaseUrl: env.DATABASE_URL, debug: Boolean(env.DEBUG), corsOrigins: [] };
}
