// mutant: falsy values treated as missing
function createCache({ ttlMs, now }) {
  const entries = new Map();
  return {
    set(key, value) {
      entries.set(key, { value, expiresAt: now() + ttlMs });
    },
    get(key) {
      const e = entries.get(key);
      if (!e || !e.value) return undefined;
      if (now() >= e.expiresAt) {
        entries.delete(key);
        return undefined;
      }
      return e.value;
    },
    size: () => entries.size,
  };
}
