export function parseBearer(header: string | undefined): string | null {
  // TODO
  return null;
}

export function parseCookies(header: string | undefined): Record<string, string> {
  // TODO
  return {};
}

export function decodeJwtPayload(token: string): Record<string, unknown> | null {
  // TODO
  return null;
}

export function isExpired(payload: { exp?: unknown }, nowSeconds: number): boolean {
  // TODO
  return false;
}
