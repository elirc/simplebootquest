const LEVELS = ['debug', 'info', 'warn', 'error'] as const;
type Level = (typeof LEVELS)[number];

interface Options {
  level?: Level;
  write: (line: string) => void;
  redact?: string[];
  bindings?: Record<string, unknown>;
}

export function createLogger({ level = 'info', write, redact = ['password', 'token', 'authorization', 'cookie', 'secret'], bindings = {} }: Options) {
  const min = LEVELS.indexOf(level);

  function clean(value: unknown): unknown {
    if (value instanceof Error) return { name: value.name, message: value.message };
    if (Array.isArray(value)) return value.map(clean);
    if (value && typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [k, redact.some((word) => k.toLowerCase().includes(word)) ? '[REDACTED]' : clean(v)]),
      );
    }
    return value;
  }

  const log = (lvl: Level) => (msg: string, context: Record<string, unknown> = {}) => {
    if (LEVELS.indexOf(lvl) < min) return;
    write(JSON.stringify({ level: lvl, msg, ...(clean({ ...bindings, ...context }) as object) }));
  };

  return {
    debug: log('debug'),
    info: log('info'),
    warn: log('warn'),
    error: log('error'),
    child: (extra: Record<string, unknown>) => createLogger({ level, write, redact, bindings: { ...bindings, ...extra } }),
  };
}
