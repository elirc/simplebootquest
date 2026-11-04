interface Config {
  databaseUrl: string;
  jwtSecret: string;
  port: number;
  nodeEnv: 'development' | 'test' | 'production';
  corsOrigins: string[];
  isProduction: boolean;
}

export function loadConfig(rawEnv: Record<string, string | undefined>): Config {
  const errors: string[] = [];
  // TODO
  throw new Error('Not implemented');
}
