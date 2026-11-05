function createCache({ staleMs, now }) {
  return {
    async get(key, fetcher) {
      return { data: await fetcher(), fromCache: false };
    },
  };
}
