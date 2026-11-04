function createCache(fetcher, { ttlMs, now = Date.now }) {
  const entries = new Map();
  return {
    get(key) {
      const entry = entries.get(key);
      if (entry && (entry.pending || now() - entry.at < ttlMs)) return entry.promise;
      const promise = fetcher(key).then(
        (value) => {
          if (entries.get(key)?.promise === promise) entries.set(key, { promise, at: now(), pending: false });
          return value;
        },
        (err) => {
          if (entries.get(key)?.promise === promise) entries.delete(key);
          throw err;
        },
      );
      entries.set(key, { promise, at: now(), pending: true });
      return promise;
    },
    invalidate(key) {
      entries.delete(key);
    },
  };
}
