function parseEnv(text) {
  const out = {};
  for (const line of text.split('\n')) {
    const [key, value] = line.split('=');
    out[key] = value;
  }
  return out;
}
