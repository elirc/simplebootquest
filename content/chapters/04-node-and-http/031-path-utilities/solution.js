function normalize(p) {
  const absolute = p.startsWith('/');
  const out = [];
  for (const seg of p.split('/')) {
    if (seg === '' || seg === '.') continue;
    if (seg === '..') {
      if (out.length && out[out.length - 1] !== '..') out.pop();
      else if (!absolute) out.push('..');
    } else {
      out.push(seg);
    }
  }
  const joined = out.join('/');
  if (absolute) return '/' + joined;
  return joined || '.';
}

function join(...parts) {
  return normalize(parts.filter((x) => x !== '').join('/'));
}

function extname(p) {
  const base = p.split('/').pop() ?? '';
  const dot = base.lastIndexOf('.');
  return dot <= 0 ? '' : base.slice(dot);
}
