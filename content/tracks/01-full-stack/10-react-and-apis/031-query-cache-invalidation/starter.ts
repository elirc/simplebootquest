export function hashKey(key: unknown[]): string { return JSON.stringify(key); }
export function matchesPrefix(key: unknown[], prefix: unknown[]): boolean { return false; }
export function createQueryCache() {
  return {
    set(key: unknown[], data: unknown) {},
    get(key: unknown[]) { return undefined as unknown; },
    invalidate(prefix: unknown[]) { return 0; },
    isStale(key: unknown[]) { return false; },
  };
}
