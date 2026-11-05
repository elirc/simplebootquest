function parseSort(param, allowed, fallback) {
  if (!param) return fallback;
  const out = [];
  const seen = new Set();
  for (const raw of param.split(',')) {
    const entry = raw.trim();
    if (!entry) continue;
    const desc = entry.startsWith('-');
    const field = desc ? entry.slice(1) : entry;
    if (!allowed.includes(field)) throw new Error(`Cannot sort by "${field}"`);
    if (seen.has(field)) continue;
    seen.add(field);
    out.push({ field, direction: desc ? 'desc' : 'asc' });
  }
  return out.length ? out : fallback;
}
