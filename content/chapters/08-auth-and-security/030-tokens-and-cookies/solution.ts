export function parseBearer(header: string | undefined): string | null {
  if (!header) return null;
  const match = /^\s*bearer\s+(\S+)\s*$/i.exec(header);
  return match ? match[1]! : null;
}

export function parseCookies(header: string | undefined): Record<string, string> {
  const cookies: Record<string, string> = {};
  if (!header) return cookies;
  for (const part of header.split(';')) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    const name = part.slice(0, eq).trim();
    if (!name) continue;
    const raw = part.slice(eq + 1).trim();
    try {
      cookies[name] = decodeURIComponent(raw);
    } catch {
      cookies[name] = raw;
    }
  }
  return cookies;
}

export function decodeJwtPayload(token: string): Record<string, unknown> | null {
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  try {
    const base64 = parts[1]!.replace(/-/g, '+').replace(/_/g, '/');
    const json = new TextDecoder().decode(Uint8Array.from(atob(base64), (c) => c.charCodeAt(0)));
    const payload = JSON.parse(json);
    return typeof payload === 'object' && payload !== null ? payload : null;
  } catch {
    return null;
  }
}

export function isExpired(payload: { exp?: unknown }, nowSeconds: number): boolean {
  return typeof payload.exp === 'number' && payload.exp <= nowSeconds;
}
