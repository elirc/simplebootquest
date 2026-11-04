export function createLoginGuard({ maxAttempts = 5, baseLockMs = 60_000, now }: { maxAttempts?: number; baseLockMs?: number; now: () => number }) {
  return {
    check(account: string) { return { allowed: true } as { allowed: boolean; retryInMs?: number }; },
    recordFailure(account: string) {},
    recordSuccess(account: string) {},
  };
}
