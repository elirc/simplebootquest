function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k] = v; return res; };
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

function idempotency(store) {
  return (req, res, next) => {
    const key = req.headers['idempotency-key'];
    if (req.method !== 'POST' || !key) return next();

    const saved = store.get(key);
    if (saved === 'in-progress') return res.status(409).json({ error: 'Request in progress' });
    if (saved) {
      res.set('Idempotent-Replayed', 'true');
      return res.status(saved.status).json(saved.body);
    }

    store.set(key, 'in-progress');
    const originalJson = res.json.bind(res);
    res.json = (body) => {
      if (res.statusCode >= 500) store.delete(key);
      else store.set(key, { status: res.statusCode, body });
      return originalJson(body);
    };
    next();
  };
}
