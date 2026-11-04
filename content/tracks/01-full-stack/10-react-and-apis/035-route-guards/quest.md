---
slug: "react-api-route-guards"
title: "Route Guards"
type: "code"
language: "ts"
xp: 20
hints: ["Handle `public` and `loading` first, then switch on `route.access`.", "`//evil.com` is a protocol-relative URL that leaves your site, so reject it."]
resources: [{"title": "OWASP: Unvalidated redirects", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html"}]
---
# Route Guards

Pages need protecting: logged-out users go to `/login` (and come back afterwards), logged-in users shouldn't see `/login`, and admin pages need the admin role. Centralise the rules in **one pure function**, so routing components just follow its decision:

```tsx
const decision = guard(route, auth);
if (decision.type === 'redirect') return <Navigate to={decision.to} replace />;
```

Remember: route guards are **UX**. The API must enforce the same rules.

## Your task

`guard(route, auth)` where `route = { path, access: 'public' | 'guest' | 'user' | 'admin' }` and `auth = { status: 'loading' | 'anonymous' | 'authenticated', user?: { role } }` returns:

- `{ type: 'wait' }` while auth is loading (for every route except `public`, which renders immediately).
- `public` → `{ type: 'render' }`.
- `guest` (login, register) → render for anonymous users, otherwise `{ type: 'redirect', to: '/learn' }`.
- `user` → render when authenticated, otherwise redirect to `/login?next=<encoded path>`.
- `admin` → redirect anonymous users to login (as above), render for admins, and return `{ type: 'forbidden' }` for other users.

Also implement `safeNext(next)`, which returns `next` only if it's a **local path** (starts with `/` but not `//`), and `/learn` otherwise. This prevents **open redirects** like `?next=https://evil.com`.
