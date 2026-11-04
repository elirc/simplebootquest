const root = '/srv/public';

test('serves normal files', () => {
  expect(resolveSafe(root, '/images/cat.png')).toBe('/srv/public/images/cat.png');
  expect(resolveSafe(root, '/docs/?v=2')).toBe('/srv/public/docs/index.html');
  expect(resolveSafe(root, '/a%20b.txt')).toBe('/srv/public/a b.txt');
});

test('blocks traversal', () => {
  expect(resolveSafe(root, '/../../etc/passwd')).toBeNull();
  expect(resolveSafe(root, '/images/../../secret')).toBeNull();
  expect(resolveSafe(root, '/%2e%2e/%2e%2e/etc/passwd')).toBeNull();
  expect(resolveSafe(root, '/../public-backup/x')).toBeNull();
});

test('rejects malformed input', () => {
  expect(resolveSafe(root, '/%E0%A4%A')).toBeNull();
  expect(resolveSafe(root, '/a%00.png')).toBeNull();
});

test('contentType', () => {
  expect(contentType('/x/index.html')).toBe('text/html; charset=utf-8');
  expect(contentType('logo.SVG')).toBe('image/svg+xml');
  expect(contentType('archive.zip')).toBe('application/octet-stream');
});
