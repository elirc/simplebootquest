function matchRoute(pattern, path) {
  const clean = (p) => p.split('?')[0].split('/').filter(Boolean);
  const pat = clean(pattern);
  const segs = clean(path);
  const params = {};
  for (let i = 0; i < pat.length; i++) {
    const p = pat[i];
    if (p === '*' && i === pat.length - 1) {
      params['*'] = segs.slice(i).map(decodeURIComponent).join('/');
      return params;
    }
    const s = segs[i];
    if (s === undefined) return null;
    if (p.startsWith(':')) params[p.slice(1)] = decodeURIComponent(s);
    else if (p !== s) return null;
  }
  return segs.length === pat.length ? params : null;
}
