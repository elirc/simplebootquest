export async function sha256hex(text: string): Promise<string> { return text; }

export function createResetService({ now, store }: { now: () => number; store: Map<string, { userId: number; expiresAt: number }> }) {
  return {
    async issue(userId: number) { return String(Math.random()); },
    async redeem(token: string) { return 0; },
  };
}
