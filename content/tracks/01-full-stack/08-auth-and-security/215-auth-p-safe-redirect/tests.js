test('relative paths are allowed', () => {
  expect(safeRedirect('/settings')).toBe('/settings');
  expect(safeRedirect('/todos?page=2#top')).toBe('/todos?page=2#top');
});
test('absolute URLs are rejected', () => {
  expect(safeRedirect('https://evil.com')).toBe('/');
  expect(safeRedirect('javascript:alert(1)')).toBe('/');
  expect(safeRedirect('evil.com/path')).toBe('/');
});
test('protocol-relative and backslash tricks', () => {
  expect(safeRedirect('//evil.com')).toBe('/');
  expect(safeRedirect('/\\evil.com')).toBe('/');
  expect(safeRedirect('\\\\evil.com')).toBe('/');
  expect(safeRedirect('/ok\\..\\evil')).toBe('/');
});
test('control characters', () => {
  expect(safeRedirect('/\t/evil.com')).toBe('/');
  expect(safeRedirect('/\n/evil.com')).toBe('/');
});
test('fallbacks', () => {
  expect(safeRedirect(undefined, '/dashboard')).toBe('/dashboard');
  expect(safeRedirect(['/a'], '/home')).toBe('/home');
  expect(safeRedirect('', '/home')).toBe('/home');
});
