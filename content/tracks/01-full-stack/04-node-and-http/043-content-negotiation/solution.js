function specificity(type) {
  if (type === '*/*') return 0;
  if (type.endsWith('/*')) return 1;
  return 2;
}

function parseAccept(header) {
  if (!header || !header.trim()) return [{ type: '*/*', q: 1 }];
  return header
    .split(',')
    .map((part, index) => {
      const [type, ...params] = part.trim().split(';').map((s) => s.trim());
      const qParam = params.find((p) => p.startsWith('q='));
      const q = qParam ? Number(qParam.slice(2)) : 1;
      return { type: type.toLowerCase(), q: Number.isNaN(q) ? 0 : q, index };
    })
    .sort((a, b) => b.q - a.q || specificity(b.type) - specificity(a.type) || a.index - b.index)
    .map(({ type, q }) => ({ type, q }));
}

function matches(range, type) {
  if (range === '*/*') return true;
  if (range.endsWith('/*')) return type.startsWith(range.slice(0, -1));
  return range === type;
}

function negotiate(header, available) {
  const ranges = parseAccept(header);
  let best = null;
  let bestQ = 0;
  for (const type of available) {
    const range = ranges.find((r) => matches(r.type, type));
    if (range && range.q > bestQ) {
      best = type;
      bestQ = range.q;
    }
  }
  return best;
}
