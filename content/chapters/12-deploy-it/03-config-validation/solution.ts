interface Config {
  databaseUrl: string;
  jwtSecret: string;
  port: number;
  nodeEnv: 'development' | 'test' | 'production';
  corsOrigins: string[];
  isProduction: boolean;
}

const ENVS = ['development', 'test', 'production'] as const;

export function loadConfig(rawEnv: Record<string, string | undefined>): Config {
  const errors: string[] = [];
  const get = (key: string) => {
    const value = rawEnv[key]?.trim();
    return value ? value : undefined;
  };

  const databaseUrl = get('DATABASE_URL');
  if (!databaseUrl) errors.push('DATABASE_URL is required');
  else if (!/^postgres(ql)?:\/\//.test(databaseUrl)) errors.push('DATABASE_URL must be a postgres URL');

  const jwtSecret = get('JWT_SECRET');
  if (!jwtSecret) errors.push('JWT_SECRET is required');
  else if (jwtSecret.length < 32) errors.push('JWT_SECRET must be at least 32 characters');

  const rawPort = get('PORT');
  const port = rawPort === undefined ? 3001 : Number(rawPort);
  if (!Number.isInteger(port) || port < 1 || port > 65535 || (rawPort !== undefined && !/^\d+$/.test(rawPort))) {
    errors.push('PORT must be an integer between 1 and 65535');
  }

  const nodeEnv = (get('NODE_ENV') ?? 'development') as Config['nodeEnv'];
  if (!ENVS.includes(nodeEnv)) errors.push(`NODE_ENV must be one of: ${ENVS.join(', ')}`);

  const corsOrigins = (get('CORS_ORIGINS') ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (errors.length > 0) throw new Error(`Invalid configuration:\n${errors.join('\n')}`);
  return { databaseUrl: databaseUrl!, jwtSecret: jwtSecret!, port, nodeEnv, corsOrigins, isProduction: nodeEnv === 'production' };
}
