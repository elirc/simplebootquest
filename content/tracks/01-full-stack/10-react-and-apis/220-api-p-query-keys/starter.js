function hashKey(key) {
  return JSON.stringify(key);
}

function matchesPrefix(key, prefix) {
  return hashKey(key) === hashKey(prefix);
}

function createRegistry() {
  const map = new Map();
  return {
    set: (key, data) => map.set(hashKey(key), data),
    get: (key) => map.get(hashKey(key)),
    invalidate: () => 0,
  };
}
