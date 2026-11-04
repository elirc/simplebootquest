import type { RequestHandler } from 'express';

type Level = 'info' | 'warn' | 'error';

function serialise(value: unknown): unknown {
  if (value instanceof Error) return { name: value.name, message: value.message, stack: value.stack };
  return value;
}

/** Structured JSON logs: one line per event, easy for hosting platforms to search. */
function log(level: Level, message: string, context: Record<string, unknown> = {}) {
  const entry = Object.fromEntries(Object.entries(context).map(([k, v]) => [k, serialise(v)]));
  const line = JSON.stringify({ time: new Date().toISOString(), level, message, ...entry });
  (level === 'error' ? console.error : console.log)(line);
}

export const logger = {
  info: (message: string, context?: Record<string, unknown>) => log('info', message, context),
  warn: (message: string, context?: Record<string, unknown>) => log('warn', message, context),
  error: (message: string, context?: Record<string, unknown>) => log('error', message, context),
};

export const requestLogger: RequestHandler = (req, res, next) => {
  if (!req.path.startsWith('/api')) return next();
  const start = process.hrtime.bigint();
  res.on('finish', () => {
    const ms = Number(process.hrtime.bigint() - start) / 1e6;
    // Never log bodies or cookies: they contain passwords and tokens.
    logger.info('request', { method: req.method, path: req.originalUrl.split('?')[0], status: res.statusCode, ms: Math.round(ms) });
  });
  next();
};
