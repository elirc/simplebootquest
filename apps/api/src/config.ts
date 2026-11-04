import { z } from 'zod';

/**
 * All configuration is read and validated ONCE, at startup. If anything is
 * missing or malformed the process refuses to start, instead of failing on
 * the first request that happens to need it.
 */
const schema = z.object({
  DATABASE_URL: z.string().regex(/^postgres(ql)?:\/\//, 'must be a postgres:// URL'),
  JWT_SECRET: z.string().min(32, 'must be at least 32 characters'),
  PORT: z.coerce.number().int().min(1).max(65535).default(3001),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  /** Directory of the built React app to serve in production. */
  WEB_DIST: z.string().optional(),
});

export type Config = {
  databaseUrl: string;
  jwtSecret: string;
  port: number;
  nodeEnv: 'development' | 'test' | 'production';
  isProduction: boolean;
  webDist?: string;
};

export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  const result = schema.safeParse(env);
  if (!result.success) {
    const lines = result.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`);
    throw new Error(`Invalid configuration:\n${lines.join('\n')}`);
  }
  const c = result.data;
  return {
    databaseUrl: c.DATABASE_URL,
    jwtSecret: c.JWT_SECRET,
    port: c.PORT,
    nodeEnv: c.NODE_ENV,
    isProduction: c.NODE_ENV === 'production',
    webDist: c.WEB_DIST,
  };
}
