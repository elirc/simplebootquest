function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k] = v; return res; };
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

function requireAuth(req, res, next) {
  if (!req.user) return res.status(401).json({ error: 'Authentication required' });
  next();
}

function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: 'Authentication required' });
    if (!roles.includes(req.user.role)) return res.status(403).json({ error: 'Forbidden' });
    next();
  };
}

function requireOwnerOrRole(getOwnerId, ...roles) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: 'Authentication required' });
    if (getOwnerId(req) === req.user.id || roles.includes(req.user.role)) return next();
    res.status(403).json({ error: 'Forbidden' });
  };
}
