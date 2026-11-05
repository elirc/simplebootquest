function parseEnv(text) {
  const out = {};
  for (const raw of text.split(/\r?\n/)) {
    let line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    if (line.startsWith('export ')) line = line.slice(7).trim();
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) continue;
    let value = line.slice(eq + 1).trim();
    if (value.startsWith('"')) {
      const end = value.lastIndexOf('"');
      value = value.slice(1, end > 0 ? end : undefined).replace(/\\n/g, '\n').replace(/\\"/g, '"');
    } else if (value.startsWith("'")) {
      const end = value.lastIndexOf("'");
      value = value.slice(1, end > 0 ? end : undefined);
    } else {
      const hash = value.indexOf(' #');
      if (hash !== -1) value = value.slice(0, hash);
      value = value.trim();
    }
    out[key] = value;
  }
  return out;
}
