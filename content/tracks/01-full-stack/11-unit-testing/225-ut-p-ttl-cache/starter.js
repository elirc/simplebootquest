test('returns a value that was set', () => {
  let t = 0;
  const cache = createCache({ ttlMs: 100, now: () => t });
  // ...
});
