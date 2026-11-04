function etagFor(body) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < body.length; i++) {
    hash ^= body.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return `"${(hash >>> 0).toString(16)}"`;
}

function conditionalResponse(req, body, cacheControl) {
  const etag = etagFor(body);
  const headers = { ETag: etag, 'Cache-Control': cacheControl };
  const ifNoneMatch = req.headers['if-none-match'];
  if (ifNoneMatch) {
    const tags = ifNoneMatch.split(',').map((t) => t.trim());
    if (tags.includes('*') || tags.includes(etag)) return { status: 304, headers, body: '' };
  }
  return { status: 200, headers, body };
}
