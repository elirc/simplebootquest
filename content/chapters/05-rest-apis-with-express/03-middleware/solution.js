function compose(middlewares) {
  return async function run(req, res) {
    async function dispatch(i) {
      const middleware = middlewares[i];
      if (!middleware) return;
      let nextError;
      let nextPromise;
      await middleware(req, res, (err) => {
        if (err) {
          nextError = err;
          return;
        }
        nextPromise = dispatch(i + 1);
        return nextPromise;
      });
      if (nextError) throw nextError;
      if (nextPromise) await nextPromise;
    }
    await dispatch(0);
  };
}

function requireJson(req, res, next) {
  const needsBody = ['POST', 'PUT', 'PATCH'].includes(req.method);
  const contentType = req.headers['content-type'] ?? '';
  if (needsBody && !contentType.startsWith('application/json')) {
    return res.status(415).json({ error: 'Content-Type must be application/json' });
  }
  next();
}

function requestTimer(clock) {
  return (req, res, next) => {
    req.startTime = clock();
    next();
  };
}
