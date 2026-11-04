function normalize(p) {
  const absolute = p.startsWith('/');
  const out = [];
  for (const seg of p.split('/')) {
    if (seg === '' || seg === '.') continue;
    if (seg === '..') {
      if (out.length && out[out.length - 1] !== '..') out.pop();
      else if (!absolute) out.push('..');
    } else out.push(seg);
  }
  return absolute ? '/' + out.join('/') : out.join('/') || '.';
}

function resolveSafe(root, urlPath) {
  return normalize(root + urlPath);
}

function contentType(file) {}
