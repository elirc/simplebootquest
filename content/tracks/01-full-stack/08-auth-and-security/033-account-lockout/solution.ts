export function createLoginGuard({ maxAttempts = 5, baseLockMs = 60_000, now }: { maxAttempts?: number; baseLockMs?: number; now: () => number }) {
  const state = new Map<string, { failures: number; lockouts: number; lockedUntil: number }>();
  const get = (account: string) => {
    if (!state.has(account)) state.set(account, { failures: 0, lockouts: 0, lockedUntil: 0 });
    return state.get(account)!;
  };
  return {
    check(account: string): { allowed: boolean; retryInMs?: number } {
      const s = state.get(account);
      if (s && s.lockedUntil > now()) return { allowed: false, retryInMs: s.lockedUntil - now() };
      return { allowed: true };
    },
    recordFailure(account: string) {
      const s = get(account);
      s.failures++;
      if (s.failures >= maxAttempts) {
        s.lockedUntil = now() + baseLockMs * 2 ** s.lockouts;
        s.lockouts++;
        s.failures = 0;
      }
    },
    recordSuccess(account: string) {
      state.delete(account);
    },
  };
}
