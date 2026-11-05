test('API responses', () => {
  expect(cacheControlFor('/api/todos')).toBe('no-store');
  expect(cacheControlFor('/api/auth/me.json')).toBe('no-store');
});
test('HTML and SPA routes', () => {
  expect(cacheControlFor('/')).toBe('no-cache');
  expect(cacheControlFor('/index.html')).toBe('no-cache');
  expect(cacheControlFor('/todos/42')).toBe('no-cache');
});
test('hashed assets are immutable', () => {
  expect(cacheControlFor('/assets/index-3f9a1c2b.js')).toBe('public, max-age=31536000, immutable');
  expect(cacheControlFor('/assets/logo.BxK9_aZ1.svg')).toBe('public, max-age=31536000, immutable');
});
test('unhashed static files get a short cache', () => {
  expect(cacheControlFor('/favicon.ico')).toBe('public, max-age=3600');
  expect(cacheControlFor('/assets/logo.svg')).toBe('public, max-age=3600');
  expect(cacheControlFor('/assets/app-v2.css')).toBe('public, max-age=3600');
});
