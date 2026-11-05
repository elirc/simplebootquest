function fnv1a(str) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function etagFor(body) {
  return `W/"${body.length.toString(16)}-${fnv1a(body).toString(16)}"`;
}

function sendJson(req, res, data) {
  const tag = etagFor(JSON.stringify(data));
  res.set('ETag', tag);
  if (req.headers['if-none-match'] === tag) return res.status(304).end();
  return res.status(200).json(data);
}
