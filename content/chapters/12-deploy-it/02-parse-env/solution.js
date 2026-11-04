function parseEnv(text) {
  const env = {};
  for (const rawLine of text.split(/\r?\n/)) {
    let line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    if (line.startsWith('export ')) line = line.slice(7).trim();
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    if (!key) continue;
    let value = line.slice(eq + 1).trim();
    const quote = value[0];
    if ((quote === '"' || quote === "'") && value.length >= 2 && value.endsWith(quote)) {
      value = value.slice(1, -1);
      if (quote === '"') value = value.replace(/\\n/g, '\n');
    } else {
      const comment = value.search(/\s#/);
      if (comment !== -1) value = value.slice(0, comment).trim();
    }
    env[key] = value;
  }
  return env;
}

function toEnvFile(obj) {
  return Object.entries(obj)
    .map(([key, value]) => {
      const str = String(value);
      return /[\s#]/.test(str) ? `${key}="${str.replace(/\n/g, '\\n')}"` : `${key}=${str}`;
    })
    .join('\n');
}
