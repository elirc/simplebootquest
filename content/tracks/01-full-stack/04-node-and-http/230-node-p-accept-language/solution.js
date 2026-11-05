function pickLanguage(header, supported) {
  if (!header) return supported[0];
  const prefs = header
    .split(',')
    .map((part, i) => {
      const [tag, ...params] = part.trim().split(';');
      let q = 1;
      for (const p of params) {
        const [k, v] = p.trim().split('=');
        if (k === 'q') q = Number(v);
      }
      return { tag: tag.trim().toLowerCase(), q: Number.isNaN(q) ? 0 : q, i };
    })
    .filter((p) => p.tag && p.q > 0)
    .sort((a, b) => b.q - a.q || a.i - b.i);
  for (const { tag } of prefs) {
    if (tag === '*') return supported[0];
    const exact = supported.find((s) => s.toLowerCase() === tag);
    if (exact) return exact;
    const primary = tag.split('-')[0];
    const loose = supported.find((s) => s.toLowerCase() === primary);
    if (loose) return loose;
  }
  return supported[0];
}
