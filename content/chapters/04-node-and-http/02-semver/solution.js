function parseVersion(text) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(String(text).trim());
  if (!match) throw new Error(`Invalid version: ${text}`);
  return { major: Number(match[1]), minor: Number(match[2]), patch: Number(match[3]) };
}

function compareVersions(a, b) {
  const va = parseVersion(a);
  const vb = parseVersion(b);
  for (const part of ['major', 'minor', 'patch']) {
    if (va[part] !== vb[part]) return va[part] < vb[part] ? -1 : 1;
  }
  return 0;
}

function satisfies(version, range) {
  const op = range[0] === '^' || range[0] === '~' ? range[0] : '';
  const base = op ? range.slice(1) : range;
  const v = parseVersion(version);
  const b = parseVersion(base);
  if (compareVersions(version, base) < 0) return false;
  if (op === '') return compareVersions(version, base) === 0;
  if (op === '~') return v.major === b.major && v.minor === b.minor;
  if (b.major > 0) return v.major === b.major;
  return v.major === 0 && v.minor === b.minor;
}
