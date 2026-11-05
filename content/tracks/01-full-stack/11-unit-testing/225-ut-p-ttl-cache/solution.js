function setup() {
  const clock = { t: 0 };
  const cache = createCache({ ttlMs: 100, now: () => clock.t });
  return { cache, clock };
}
test('returns a value that was set', () => {
  const { cache } = setup();
  cache.set('a', 1);
  expect(cache.get('a')).toBe(1);
  expect(cache.get('missing')).toBeUndefined();
});
test('still fresh just before the TTL', () => {
  const { cache, clock } = setup();
  cache.set('a', 1);
  clock.t = 99;
  expect(cache.get('a')).toBe(1);
});
test('expires at exactly the TTL', () => {
  const { cache, clock } = setup();
  cache.set('a', 1);
  clock.t = 100;
  expect(cache.get('a')).toBeUndefined();
});
test('expired entries are deleted on read', () => {
  const { cache, clock } = setup();
  cache.set('a', 1);
  clock.t = 150;
  cache.get('a');
  expect(cache.size()).toBe(0);
});
test('setting again restarts the timer', () => {
  const { cache, clock } = setup();
  cache.set('a', 1);
  clock.t = 80;
  cache.set('a', 2);
  clock.t = 150;
  expect(cache.get('a')).toBe(2);
});
test('falsy values are cached', () => {
  const { cache } = setup();
  cache.set('zero', 0);
  expect(cache.get('zero')).toBe(0);
});
