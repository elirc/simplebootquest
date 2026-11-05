function createCache({ staleMs, now }) {
  const entries = new Map();
  const inflight = new Map();
  const revalidate = (key, fetcher) => {
    if (inflight.has(key)) return inflight.get(key);
    const p = Promise.resolve()
      .then(fetcher)
      .then((data) => {
        entries.set(key, { data, at: now() });
        return data;
      })
      .finally(() => inflight.delete(key));
    inflight.set(key, p);
    return p;
  };
  return {
    async get(key, fetcher) {
      const entry = entries.get(key);
      if (!entry) return { data: await revalidate(key, fetcher), fromCache: false };
      if (now() - entry.at >= staleMs) revalidate(key, fetcher).catch(() => {});
      return { data: entry.data, fromCache: true };
    },
  };
}
