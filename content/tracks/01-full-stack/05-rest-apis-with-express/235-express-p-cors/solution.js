function cors({ origins, methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], credentials = false }) {
  return (req, res, next) => {
    res.set('Vary', 'Origin');
    const origin = req.headers.origin;
    const allowed = origin !== undefined && origins.includes(origin);
    if (allowed) {
      res.set('Access-Control-Allow-Origin', origin);
      if (credentials) res.set('Access-Control-Allow-Credentials', 'true');
      if (req.method === 'OPTIONS') {
        res.set('Access-Control-Allow-Methods', methods.join(','));
        res.set('Access-Control-Allow-Headers', req.headers['access-control-request-headers'] ?? 'Content-Type');
        return res.status(204).end();
      }
    }
    next();
  };
}
