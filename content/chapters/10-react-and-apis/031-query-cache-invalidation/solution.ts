function stable(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value as object).sort().map((k) => [k, stable((value as Record<string, unknown>)[k])]));
  }
  return value;
}

export function hashKey(key: unknown[]): string {
  return JSON.stringify(stable(key));
}

export function matchesPrefix(key: unknown[], prefix: unknown[]): boolean {
  if (prefix.length > key.length) return false;
  return prefix.every((part, i) => hashKey([part]) === hashKey([key[i]]));
}

export function createQueryCache() {
  const entries = new Map<string, { key: unknown[]; data: unknown; stale: boolean }>();
  return {
    set(key: unknown[], data: unknown) {
      entries.set(hashKey(key), { key, data, stale: false });
    },
    get(key: unknown[]) {
      return entries.get(hashKey(key))?.data;
    },
    invalidate(prefix: unknown[]) {
      let count = 0;
      for (const entry of entries.values()) {
        if (matchesPrefix(entry.key, prefix)) {
          entry.stale = true;
          count++;
        }
      }
      return count;
    },
    isStale(key: unknown[]) {
      return entries.get(hashKey(key))?.stale ?? false;
    },
  };
}
