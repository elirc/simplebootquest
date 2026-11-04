function serializeCookie(name, value, options = {}) {
  if (!/^[\w!#$%&'*.^`|~+-]+$/.test(name)) throw new Error(`Invalid cookie name: ${name}`);
  const parts = [`${name}=${encodeURIComponent(value)}`];
  if (options.path) parts.push(`Path=${options.path}`);
  if (options.domain) parts.push(`Domain=${options.domain}`);
  if (options.maxAge !== undefined) parts.push(`Max-Age=${Math.floor(options.maxAge)}`);
  if (options.httpOnly) parts.push('HttpOnly');
  if (options.secure) parts.push('Secure');
  if (options.sameSite) {
    const s = options.sameSite.toLowerCase();
    if (s === 'none' && !options.secure) throw new Error('SameSite=None requires Secure');
    parts.push(`SameSite=${s[0].toUpperCase()}${s.slice(1)}`);
  }
  return parts.join('; ');
}

function clearCookie(name, options = {}) {
  return serializeCookie(name, '', { ...options, maxAge: 0 });
}
