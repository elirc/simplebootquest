class HttpError extends Error {
  constructor(status, message, details) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.details = details;
  }
}

function createErrorHandler(logger) {
  return function errorHandler(err, req, res, next) {
    if (err instanceof HttpError) {
      const body = { error: err.message };
      if (err.details !== undefined) body.details = err.details;
      return res.status(err.status).json(body);
    }
    if (err && err.type === 'entity.parse.failed') {
      return res.status(400).json({ error: 'Invalid JSON' });
    }
    logger(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  };
}

function notFound(req, res) {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found` });
}
