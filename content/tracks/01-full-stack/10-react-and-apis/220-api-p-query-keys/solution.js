function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    const out = {};
    for (const k of Object.keys(value).sort()) if (value[k] !== undefined) out[k] = stable(value[k]);
    return out;
  }
  return value;
}

function hashKey(key) {
  return JSON.stringify(stable(key));
}

function matchesPrefix(key, prefix) {
  if (prefix.length > key.length) return false;
  return prefix.every((part, i) => hashKey([part]) === hashKey([key[i]]));
}

function createRegistry() {
  const map = new Map();
  return {
    set: (key, data) => map.set(hashKey(key), { key, data }),
    get: (key) => map.get(hashKey(key))?.data,
    invalidate(prefix) {
      let n = 0;
      for (const [hash, entry] of map) {
        if (matchesPrefix(entry.key, prefix)) {
          map.delete(hash);
          n++;
        }
      }
      return n;
    },
  };
}
