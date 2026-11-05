function safeRedirect(next, fallback = '/') {
  if (typeof next !== 'string' || next === '') return fallback;
  if (/[\x00-\x1f]/.test(next)) return fallback;
  if (!next.startsWith('/')) return fallback;
  if (next[1] === '/' || next[1] === '\\') return fallback;
  if (next.includes('\\')) return fallback;
  return next;
}
