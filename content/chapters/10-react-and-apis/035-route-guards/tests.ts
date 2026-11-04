const loading = { status: 'loading' };
const anon = { status: 'anonymous' };
const member = { status: 'authenticated', user: { role: 'member' } };
const admin = { status: 'authenticated', user: { role: 'admin' } };

test('public routes always render', () => {
  for (const auth of [loading, anon, member]) expect(guard({ path: '/', access: 'public' }, auth)).toEqual({ type: 'render' });
});

test('wait while loading', () => {
  expect(guard({ path: '/profile', access: 'user' }, loading)).toEqual({ type: 'wait' });
});

test('guest pages', () => {
  expect(guard({ path: '/login', access: 'guest' }, anon)).toEqual({ type: 'render' });
  expect(guard({ path: '/login', access: 'guest' }, member)).toEqual({ type: 'redirect', to: '/learn' });
});

test('user pages redirect with next', () => {
  expect(guard({ path: '/profile?tab=badges', access: 'user' }, anon)).toEqual({ type: 'redirect', to: '/login?next=%2Fprofile%3Ftab%3Dbadges' });
  expect(guard({ path: '/profile', access: 'user' }, member)).toEqual({ type: 'render' });
});

test('admin pages', () => {
  expect(guard({ path: '/admin', access: 'admin' }, anon).type).toBe('redirect');
  expect(guard({ path: '/admin', access: 'admin' }, member)).toEqual({ type: 'forbidden' });
  expect(guard({ path: '/admin', access: 'admin' }, admin)).toEqual({ type: 'render' });
});

test('safeNext blocks open redirects', () => {
  expect(safeNext('/profile')).toBe('/profile');
  for (const bad of ['https://evil.com', '//evil.com', 'javascript:alert(1)', null, '']) expect(safeNext(bad)).toBe('/learn');
});
