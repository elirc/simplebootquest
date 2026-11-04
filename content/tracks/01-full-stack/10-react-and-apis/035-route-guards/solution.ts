type Access = 'public' | 'guest' | 'user' | 'admin';
type Auth = { status: 'loading' | 'anonymous' | 'authenticated'; user?: { role: string } };
type Decision = { type: 'render' } | { type: 'wait' } | { type: 'forbidden' } | { type: 'redirect'; to: string };

export function guard(route: { path: string; access: Access }, auth: Auth): Decision {
  if (route.access === 'public') return { type: 'render' };
  if (auth.status === 'loading') return { type: 'wait' };
  const loggedIn = auth.status === 'authenticated';
  const toLogin: Decision = { type: 'redirect', to: `/login?next=${encodeURIComponent(route.path)}` };

  switch (route.access) {
    case 'guest':
      return loggedIn ? { type: 'redirect', to: '/learn' } : { type: 'render' };
    case 'user':
      return loggedIn ? { type: 'render' } : toLogin;
    case 'admin':
      if (!loggedIn) return toLogin;
      return auth.user?.role === 'admin' ? { type: 'render' } : { type: 'forbidden' };
  }
}

export function safeNext(next: string | null): string {
  if (!next || !next.startsWith('/') || next.startsWith('//') || next.startsWith('/\\')) return '/learn';
  return next;
}
