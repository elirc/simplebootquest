function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k] = v; return res; };
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

function requireAuth(req, res, next) {
  next();
}

function requireRole(...roles) {
  return (req, res, next) => next();
}

function requireOwnerOrRole(getOwnerId, ...roles) {
  return (req, res, next) => next();
}
