import type { ErrorRequestHandler, RequestHandler } from 'express';
import { z } from 'zod';

/** Throw this anywhere in a request; the error handler turns it into a response. */
export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export const notFound = (what = 'Resource') => new HttpError(404, `${what} not found`);

/** Validate input with a Zod schema, or throw a 400 with field-level details. */
export function parse<T extends z.ZodTypeAny>(schema: T, data: unknown): z.infer<T> {
  const result = schema.safeParse(data);
  if (!result.success) {
    // One message per field: the first failing rule ("required" before "format").
    const details: Record<string, string> = {};
    for (const i of result.error.issues) details[i.path.join('.') || '_'] ??= i.message;
    throw new HttpError(400, 'Validation failed', details);
  }
  return result.data;
}

export const notFoundHandler: RequestHandler = (req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl.split('?')[0]} not found` });
};

export function createErrorHandler(log: (err: unknown) => void): ErrorRequestHandler {
  return (err, _req, res, _next) => {
    if (err instanceof HttpError) {
      res.status(err.status).json(err.details === undefined ? { error: err.message } : { error: err.message, details: err.details });
      return;
    }
    if (err?.type === 'entity.parse.failed') {
      res.status(400).json({ error: 'Invalid JSON' });
      return;
    }
    if (err?.type === 'entity.too.large') {
      res.status(413).json({ error: 'Request body too large' });
      return;
    }
    log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  };
}
