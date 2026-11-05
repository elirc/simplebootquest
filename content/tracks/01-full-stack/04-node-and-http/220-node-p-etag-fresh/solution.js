function isFresh(req, res) {
  const inm = req['if-none-match'];
  if (inm !== undefined) {
    if (!res.etag) return false;
    if (inm.trim() === '*') return true;
    const strip = (t) => t.trim().replace(/^W\//, '');
    const current = strip(res.etag);
    return inm.split(',').some((t) => strip(t) === current);
  }
  const ims = req['if-modified-since'];
  if (ims && res['last-modified']) {
    const since = Date.parse(ims);
    const modified = Date.parse(res['last-modified']);
    if (Number.isNaN(since) || Number.isNaN(modified)) return false;
    return modified <= since;
  }
  return false;
}
