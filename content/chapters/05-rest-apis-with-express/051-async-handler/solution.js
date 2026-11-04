function asyncHandler(fn) {
  return (req, res, next) => {
    try {
      return Promise.resolve(fn(req, res, next)).catch(next);
    } catch (err) {
      next(err);
      return Promise.resolve();
    }
  };
}

function wrapRouter(routes) {
  return Object.fromEntries(Object.entries(routes).map(([key, handler]) => [key, asyncHandler(handler)]));
}
