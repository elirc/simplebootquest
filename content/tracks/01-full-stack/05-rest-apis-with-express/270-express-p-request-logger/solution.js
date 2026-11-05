function redactUrl(url, keys = ['token', 'password', 'secret', 'apiKey']) {
  const q = url.indexOf('?');
  if (q === -1) return url;
  const secret = new Set(keys.map((k) => k.toLowerCase()));
  const query = url
    .slice(q + 1)
    .split('&')
    .map((pair) => {
      const eq = pair.indexOf('=');
      const name = eq === -1 ? pair : pair.slice(0, eq);
      return secret.has(decodeURIComponent(name).toLowerCase()) ? `${name}=[REDACTED]` : pair;
    })
    .join('&');
  return `${url.slice(0, q)}?${query}`;
}

function logLine({ method, url, status, ms, userId }) {
  const base = `${method} ${redactUrl(url)} ${status} ${Math.round(ms * 10) / 10}ms`;
  return userId !== undefined && userId !== null ? `${base} user=${userId}` : base;
}
