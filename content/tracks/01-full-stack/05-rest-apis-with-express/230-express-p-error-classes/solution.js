class HttpError extends Error {
  constructor(status, message, code) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.code = code;
  }
}

class NotFoundError extends HttpError {
  constructor(resource) {
    super(404, `${resource} not found`, 'NOT_FOUND');
  }
}

class ConflictError extends HttpError {
  constructor(message) {
    super(409, message, 'CONFLICT');
  }
}

function errorHandler(err, req, res, next) {
  if (err instanceof HttpError) return res.status(err.status).json({ error: { code: err.code, message: err.message } });
  if (err && Array.isArray(err.issues)) {
    return res.status(400).json({ error: { code: 'VALIDATION', message: 'Invalid request', issues: err.issues } });
  }
  req.log(err);
  return res.status(500).json({ error: { code: 'INTERNAL', message: 'Something went wrong' } });
}
