const enc = new TextEncoder();

export function base64url(bytes: Uint8Array): string {
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function base64urlJson(obj: unknown): string {
  return base64url(enc.encode(JSON.stringify(obj)));
}

function fromBase64url(s: string): Uint8Array {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/');
  return Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
}

function key(secret: string) {
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

export async function sign(payload: Record<string, unknown>, secret: string): Promise<string> {
  const data = `${base64urlJson({ alg: 'HS256', typ: 'JWT' })}.${base64urlJson(payload)}`;
  const sig = await crypto.subtle.sign('HMAC', await key(secret), enc.encode(data));
  return `${data}.${base64url(new Uint8Array(sig))}`;
}

export async function verify(token: string, secret: string, nowSeconds: number): Promise<Record<string, unknown>> {
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('Invalid token');
  const [header, body, signature] = parts as [string, string, string];
  let ok = false;
  let payload: Record<string, unknown>;
  try {
    ok = await crypto.subtle.verify('HMAC', await key(secret), fromBase64url(signature), enc.encode(`${header}.${body}`));
    payload = JSON.parse(new TextDecoder().decode(fromBase64url(body)));
  } catch {
    throw new Error('Invalid token');
  }
  if (!ok) throw new Error('Invalid token');
  if (typeof payload.exp === 'number' && payload.exp <= nowSeconds) throw new Error('Token expired');
  return payload;
}
