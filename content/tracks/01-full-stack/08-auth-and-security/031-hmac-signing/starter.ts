export function base64url(bytes: Uint8Array): string { return ''; }
export function base64urlJson(obj: unknown): string { return ''; }
export async function sign(payload: Record<string, unknown>, secret: string): Promise<string> { return ''; }
export async function verify(token: string, secret: string, nowSeconds: number): Promise<Record<string, unknown>> { return {}; }
