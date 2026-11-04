function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k] = v; return res; };
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

const UNITS = { b: 1, kb: 1024, mb: 1024 ** 2, gb: 1024 ** 3 };

function parseSize(str) {
  const m = /^(\d+(?:\.\d+)?)\s*(b|kb|mb|gb)?$/i.exec(String(str).trim());
  if (!m) throw new Error(`Invalid size: ${str}`);
  return Math.floor(Number(m[1]) * UNITS[(m[2] ?? 'b').toLowerCase()]);
}

function bodyLimit(limit) {
  const max = parseSize(limit);
  return (req, res, next) => {
    const length = Number(req.headers['content-length']);
    if (Number.isFinite(length) && length > max) {
      return res.status(413).json({ error: 'Request body too large', limit: max });
    }
    next();
  };
}
