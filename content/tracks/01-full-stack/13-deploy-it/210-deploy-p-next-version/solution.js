function parseCommit(message) {
  const [first, ...rest] = message.split('\n');
  const m = /^([a-z]+)(?:\(([^)]+)\))?(!)?: (.+)$/.exec(first);
  if (!m) return null;
  const breaking = Boolean(m[3]) || rest.some((line) => line.startsWith('BREAKING CHANGE:'));
  return { type: m[1], scope: m[2] ?? null, breaking, subject: m[4] };
}

const RANK = { patch: 1, minor: 2, major: 3 };

function releaseType(messages) {
  let best = null;
  for (const msg of messages) {
    const c = parseCommit(msg);
    if (!c) continue;
    const t = c.breaking ? 'major' : c.type === 'feat' ? 'minor' : c.type === 'fix' || c.type === 'perf' ? 'patch' : null;
    if (t && (!best || RANK[t] > RANK[best])) best = t;
  }
  return best;
}

function nextVersion(current, messages) {
  let type = releaseType(messages);
  if (!type) return current;
  const [major, minor, patch] = current.split('.').map(Number);
  if (major === 0) type = type === 'major' ? 'minor' : type === 'minor' ? 'patch' : 'patch';
  if (type === 'major') return `${major + 1}.0.0`;
  if (type === 'minor') return `${major}.${minor + 1}.0`;
  return `${major}.${minor}.${patch + 1}`;
}
