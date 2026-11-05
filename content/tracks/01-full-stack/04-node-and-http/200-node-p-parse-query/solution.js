function parseQuery(qs) {
  const out = {};
  const body = qs.startsWith('?') ? qs.slice(1) : qs;
  if (!body) return out;
  const decode = (s) => decodeURIComponent(s.replace(/\+/g, ' '));
  for (const part of body.split('&')) {
    if (!part) continue;
    const eq = part.indexOf('=');
    const key = decode(eq === -1 ? part : part.slice(0, eq));
    const value = eq === -1 ? '' : decode(part.slice(eq + 1));
    if (!(key in out)) out[key] = value;
    else if (Array.isArray(out[key])) out[key].push(value);
    else out[key] = [out[key], value];
  }
  return out;
}
