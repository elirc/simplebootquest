test('text types get a charset', () => {
  expect(contentTypeFor('index.html')).toBe('text/html; charset=utf-8');
  expect(contentTypeFor('app.js')).toBe('text/javascript; charset=utf-8');
  expect(contentTypeFor('data.json')).toBe('application/json; charset=utf-8');
});
test('binary types do not', () => {
  expect(contentTypeFor('logo.png')).toBe('image/png');
  expect(contentTypeFor('photo.JPEG')).toBe('image/jpeg');
  expect(contentTypeFor('icon.svg')).toBe('image/svg+xml');
});
test('paths', () => expect(contentTypeFor('/assets/v1.2/main.CSS')).toBe('text/css; charset=utf-8'));
test('unknown and missing extensions', () => {
  expect(contentTypeFor('archive.xyz')).toBe('application/octet-stream');
  expect(contentTypeFor('/v1.2/README')).toBe('application/octet-stream');
  expect(contentTypeFor('.env')).toBe('application/octet-stream');
});
