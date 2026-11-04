test('normalize', () => {
  expect(normalize('/a//b/./c/../d')).toBe('/a/b/d');
  expect(normalize('/../etc')).toBe('/etc');
  expect(normalize('a/../../b')).toBe('../b');
  expect(normalize('a/..')).toBe('.');
  expect(normalize('/')).toBe('/');
  expect(normalize('a/b/')).toBe('a/b');
});

test('join', () => {
  expect(join('/srv', 'uploads', '../images', 'a.png')).toBe('/srv/images/a.png');
  expect(join('a', '', 'b')).toBe('a/b');
});

test('extname', () => {
  expect(extname('photo.tar.gz')).toBe('.gz');
  expect(extname('/a/b/README')).toBe('');
  expect(extname('.env')).toBe('');
  expect(extname('dir.v2/file')).toBe('');
});
