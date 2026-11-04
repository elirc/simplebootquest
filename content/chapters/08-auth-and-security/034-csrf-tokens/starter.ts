export function generateToken(): string { return 'token'; }

export function timingSafeEqual(a: string, b: string): boolean {
  return a === b;
}

export function csrfProtection(req: { method: string; cookies: Record<string, string>; headers: Record<string, string> }) {
  return { ok: true } as { ok: boolean; status?: number; error?: string };
}
