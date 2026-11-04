export function generateToken(): string {
  return [...crypto.getRandomValues(new Uint8Array(32))].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

const SAFE = new Set(['GET', 'HEAD', 'OPTIONS']);

export function csrfProtection(req: { method: string; cookies: Record<string, string>; headers: Record<string, string> }): { ok: boolean; status?: number; error?: string } {
  if (SAFE.has(req.method.toUpperCase())) return { ok: true };
  const cookie = req.cookies?.csrf;
  const header = req.headers?.['x-csrf-token'];
  if (!cookie || !header || !timingSafeEqual(cookie, header)) {
    return { ok: false, status: 403, error: 'Invalid CSRF token' };
  }
  return { ok: true };
}
