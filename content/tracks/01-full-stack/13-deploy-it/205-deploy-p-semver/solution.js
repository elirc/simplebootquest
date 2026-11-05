function parse(v) {
  const m = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?$/.exec(v);
  if (!m) throw new Error('Invalid version');
  return { major: Number(m[1]), minor: Number(m[2]), patch: Number(m[3]), pre: m[4] ?? null };
}

function comparePre(a, b) {
  const pa = a.split('.');
  const pb = b.split('.');
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    if (pa[i] === undefined) return -1;
    if (pb[i] === undefined) return 1;
    const na = /^\d+$/.test(pa[i]);
    const nb = /^\d+$/.test(pb[i]);
    if (na && nb) {
      const d = Number(pa[i]) - Number(pb[i]);
      if (d !== 0) return Math.sign(d);
    } else if (pa[i] !== pb[i]) {
      return pa[i] < pb[i] ? -1 : 1;
    }
  }
  return 0;
}

function compare(a, b) {
  const x = parse(a);
  const y = parse(b);
  for (const k of ['major', 'minor', 'patch']) if (x[k] !== y[k]) return x[k] < y[k] ? -1 : 1;
  if (x.pre === y.pre) return 0;
  if (x.pre === null) return 1;
  if (y.pre === null) return -1;
  return comparePre(x.pre, y.pre);
}

function bump(v, type) {
  const { major, minor, patch, pre } = parse(v);
  if (type === 'major') return pre && minor === 0 && patch === 0 ? `${major}.0.0` : `${major + 1}.0.0`;
  if (type === 'minor') return pre && patch === 0 ? `${major}.${minor}.0` : `${major}.${minor + 1}.0`;
  if (type === 'patch') return pre ? `${major}.${minor}.${patch}` : `${major}.${minor}.${patch + 1}`;
  throw new Error('Unknown bump type');
}

function satisfies(v, range) {
  const ver = parse(v);
  if (range.startsWith('^') || range.startsWith('~')) {
    if (ver.pre) return false;
    const base = parse(range.slice(1));
    if (compare(v, range.slice(1)) < 0) return false;
    if (range[0] === '^') return ver.major === base.major;
    return ver.major === base.major && ver.minor === base.minor;
  }
  return compare(v, range) === 0;
}
