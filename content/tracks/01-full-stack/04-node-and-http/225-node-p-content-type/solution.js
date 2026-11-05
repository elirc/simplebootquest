function parseContentType(header) {
  if (!header) return null;
  const [rawType, ...rest] = header.split(';');
  const type = rawType.trim().toLowerCase();
  if (!/^[^/\s]+\/[^/\s]+$/.test(type)) return null;
  const params = {};
  for (const part of rest) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    const name = part.slice(0, eq).trim().toLowerCase();
    let value = part.slice(eq + 1).trim();
    if (value.length >= 2 && value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (name) params[name] = value;
  }
  return { type, params };
}

function isJson(header) {
  const parsed = parseContentType(header);
  if (!parsed) return false;
  return parsed.type === 'application/json' || parsed.type.endsWith('+json');
}
