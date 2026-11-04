export async function sha256hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

const TTL_MS = 30 * 60 * 1000;

export function createResetService({ now, store }: { now: () => number; store: Map<string, { userId: number; expiresAt: number }> }) {
  return {
    async issue(userId: number) {
      for (const [hash, entry] of store) if (entry.userId === userId) store.delete(hash);
      const bytes = crypto.getRandomValues(new Uint8Array(32));
      const token = [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
      store.set(await sha256hex(token), { userId, expiresAt: now() + TTL_MS });
      return token;
    },
    async redeem(token: string) {
      const hash = await sha256hex(token);
      const entry = store.get(hash);
      if (!entry) throw new Error('Invalid or expired token');
      store.delete(hash);
      if (entry.expiresAt <= now()) throw new Error('Invalid or expired token');
      return entry.userId;
    },
  };
}
