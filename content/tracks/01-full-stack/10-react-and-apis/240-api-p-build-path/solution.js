function buildPath(pattern, params = {}, query = {}) {
  const segments = [];
  for (const seg of pattern.split('/')) {
    if (!seg.startsWith(':')) {
      segments.push(seg);
      continue;
    }
    const optional = seg.endsWith('?');
    const name = seg.slice(1, optional ? -1 : undefined);
    const value = params[name];
    if (value === undefined || value === null) {
      if (optional) continue;
      throw new Error(`Missing param "${name}" for ${pattern}`);
    }
    segments.push(encodeURIComponent(String(value)));
  }
  const path = segments.join('/') || '/';
  const parts = [];
  for (const [k, raw] of Object.entries(query)) {
    for (const v of Array.isArray(raw) ? raw : [raw]) {
      if (v === undefined || v === null || v === '') continue;
      parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`);
    }
  }
  return parts.length ? `${path}?${parts.join('&')}` : path;
}
