function serializeCookie(name, value, opts = {}) {
  if (!/^[A-Za-z0-9!#$%&'*+.^_`|~-]+$/.test(name)) throw new Error('Invalid cookie name');
  const parts = [`${name}=${encodeURIComponent(value)}`];
  if (opts.maxAge !== undefined) parts.push(`Max-Age=${Math.floor(opts.maxAge)}`);
  if (opts.domain) parts.push(`Domain=${opts.domain}`);
  parts.push(`Path=${opts.path ?? '/'}`);
  if (opts.expires) parts.push(`Expires=${opts.expires.toUTCString()}`);
  if (opts.httpOnly) parts.push('HttpOnly');
  if (opts.secure) parts.push('Secure');
  if (opts.sameSite) {
    const s = String(opts.sameSite).toLowerCase();
    if (s === 'none' && !opts.secure) throw new Error('SameSite=None requires Secure');
    parts.push(`SameSite=${s[0].toUpperCase()}${s.slice(1)}`);
  }
  return parts.join('; ');
}
