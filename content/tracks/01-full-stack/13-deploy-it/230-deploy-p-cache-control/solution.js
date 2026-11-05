function cacheControlFor(path) {
  if (path.startsWith('/api/')) return 'no-store';
  const file = path.split('/').pop() ?? '';
  if (path === '/' || file.endsWith('.html')) return 'no-cache';
  if (!file.includes('.')) return 'no-cache';
  if (path.startsWith('/assets/') && /[-.][A-Za-z0-9_-]{8,}\.[a-z0-9]+$/.test(file)) return 'public, max-age=31536000, immutable';
  return 'public, max-age=3600';
}
