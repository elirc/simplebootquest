// mutant: set does not restart the timer
function createCache({ ttlMs, now }) {
  const entries = new Map();
  return {
    set(key, value) {
      const old = entries.get(key);
      entries.set(key, { value, expiresAt: old ? old.expiresAt : now() + ttlMs });
    },
    get(key) {
      const e = entries.get(key);
      if (!e) return undefined;
      if (now() >= e.expiresAt) {
        entries.delete(key);
        return undefined;
      }
      return e.value;
    },
    size: () => entries.size,
  };
}
