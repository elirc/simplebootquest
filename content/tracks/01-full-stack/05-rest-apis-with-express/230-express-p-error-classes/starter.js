class HttpError extends Error {}
class NotFoundError extends HttpError {}
class ConflictError extends HttpError {}

function errorHandler(err, req, res, next) {
  res.status(500).json({ error: { code: 'INTERNAL', message: err.message } });
}
