function parseCommit(message) {
  const [first, ...rest] = message.split('\n');
  const m = /^([a-z]+)(?:\(([^)]+)\))?(!)?: (.+)$/.exec(first);
  if (!m) return null;
  return { type: m[1], scope: m[2] ?? null, breaking: Boolean(m[3]) || rest.some((l) => l.startsWith('BREAKING CHANGE:')), subject: m[4] };
}

function changelog(version, date, messages) {
  const sections = [
    ['⚠ Breaking changes', []],
    ['Features', []],
    ['Fixes', []],
  ];
  for (const msg of messages) {
    const c = parseCommit(msg);
    if (!c) continue;
    const line = `- ${c.scope ? `**${c.scope}:** ` : ''}${c.subject}`;
    if (c.breaking) sections[0][1].push(line);
    else if (c.type === 'feat') sections[1][1].push(line);
    else if (c.type === 'fix' || c.type === 'perf') sections[2][1].push(line);
  }
  const blocks = [`## ${version} (${date})`];
  const filled = sections.filter(([, lines]) => lines.length);
  if (filled.length === 0) blocks.push('- No user-facing changes');
  for (const [title, lines] of filled) blocks.push(`### ${title}\n${lines.join('\n')}`);
  return blocks.join('\n\n') + '\n';
}
