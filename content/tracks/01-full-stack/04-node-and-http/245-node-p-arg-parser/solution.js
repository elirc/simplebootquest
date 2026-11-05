function parseArgs(argv) {
  const flags = {};
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const word = argv[i];
    if (word === '--') {
      positional.push(...argv.slice(i + 1));
      break;
    }
    if (!word.startsWith('-') || word === '-') {
      positional.push(word);
      continue;
    }
    const body = word.replace(/^--?/, '');
    const eq = body.indexOf('=');
    if (eq !== -1) {
      flags[body.slice(0, eq)] = body.slice(eq + 1);
      continue;
    }
    if (body.startsWith('no-')) {
      flags[body.slice(3)] = false;
      continue;
    }
    const next = argv[i + 1];
    if (next !== undefined && !next.startsWith('-')) {
      flags[body] = next;
      i++;
    } else {
      flags[body] = true;
    }
  }
  return { flags, positional };
}
