function byteLength(str) {
  return new TextEncoder().encode(str).length;
}

function toBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary);
}

function fromBase64(b64) {
  const binary = atob(b64);
  return new TextDecoder().decode(Uint8Array.from(binary, (c) => c.charCodeAt(0)));
}

function basicAuthHeader(user, pass) {
  return `Basic ${toBase64(`${user}:${pass}`)}`;
}

function parseBasicAuth(header) {
  const match = /^Basic\s+(\S+)$/i.exec(header ?? '');
  if (!match) return null;
  let decoded;
  try {
    decoded = fromBase64(match[1]);
  } catch {
    return null;
  }
  const colon = decoded.indexOf(':');
  if (colon === -1) return null;
  return { user: decoded.slice(0, colon), pass: decoded.slice(colon + 1) };
}
