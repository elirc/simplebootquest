function parseCommit(message) {
  const [first, ...rest] = message.split('\n');
  const m = /^([a-z]+)(?:\(([^)]+)\))?(!)?: (.+)$/.exec(first);
  if (!m) return null;
  return { type: m[1], scope: m[2] ?? null, breaking: Boolean(m[3]) || rest.some((l) => l.startsWith('BREAKING CHANGE:')), subject: m[4] };
}

function changelog(version, date, messages) {
  return `## ${version}\n`;
}
