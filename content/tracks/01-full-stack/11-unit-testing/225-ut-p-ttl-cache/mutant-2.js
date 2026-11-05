// mutant: expired entries are kept
function createCache({ ttlMs, now }) {
  const entries = new Map();
  return {
    set(key, value) {
      entries.set(key, { value, expiresAt: now() + ttlMs });
    },
    get(key) {
      const e = entries.get(key);
      if (!e) return undefined;
      if (now() >= e.expiresAt) {
        return undefined;
      }
      return e.value;
    },
    size: () => entries.size,
  };
}
