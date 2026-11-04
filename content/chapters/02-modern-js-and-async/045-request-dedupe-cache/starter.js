function createCache(fetcher, { ttlMs, now = Date.now }) {
  return {
    get(key) {
      return fetcher(key);
    },
    invalidate(key) {},
  };
}
