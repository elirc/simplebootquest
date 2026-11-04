function requestContext({ generateId, now, log }) {
  return (req, res, next) => {
    const incoming = req.headers['x-request-id'];
    const id = typeof incoming === 'string' && /^[\w-]{1,64}$/.test(incoming) ? incoming : generateId();
    req.id = id;
    res.set('X-Request-Id', id);
    const start = now();
    res.on('finish', () => {
      log({ id, method: req.method, path: req.path, status: res.statusCode, ms: now() - start });
    });
    next();
  };
}
