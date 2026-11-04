class AppError extends Error {
  constructor(message, status = 500, options) {
    super(message, options);
    this.name = this.constructor.name;
    this.status = status;
  }
}

class NotFoundError extends AppError {
  constructor(resource) {
    super(`${resource} not found`, 404);
  }
}

class ValidationError extends AppError {
  constructor(fields) {
    super('Validation failed', 400);
    this.fields = fields;
  }
}

class AuthError extends AppError {
  constructor() {
    super('Not authenticated', 401);
  }
}

function toResponse(err) {
  if (!(err instanceof AppError)) return { status: 500, body: { error: 'Internal Server Error' } };
  const body = { error: err.message };
  if (err instanceof ValidationError) body.fields = err.fields;
  return { status: err.status, body };
}
