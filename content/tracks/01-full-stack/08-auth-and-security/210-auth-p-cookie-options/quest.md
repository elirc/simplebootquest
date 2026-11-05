---
slug: "auth-p-cookie-options"
title: "Practice: Serialising Secure Cookies"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "MDN: Set-Cookie", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"}]
---
# Practice: Serialising Secure Cookies

`res.cookie('sid', value, options)` writes a `Set-Cookie` header. The attributes are where security lives:

| Attribute | Why |
|-----------|-----|
| `HttpOnly` | JavaScript can't read it, so XSS can't steal the session |
| `Secure` | Only sent over HTTPS |
| `SameSite=Lax` | Not sent on cross-site POSTs, which blocks most CSRF |
| `Max-Age` | Lifetime in seconds (no attribute means a "session cookie") |
| `Path` | Which URLs it's sent to |

## Your task
Write `serializeCookie(name, value, opts = {})`:
- The name must match `/^[A-Za-z0-9!#$%&'*+.^_`|~-]+$/`, else throw `Error('Invalid cookie name')`.
- The value is `encodeURIComponent`-ed.
- Attributes, in this order, only when set: `Max-Age=<n>` (floored), `Domain=…`, `Path=…` (default `/`), `Expires=<date.toUTCString()>`, `HttpOnly`, `Secure`, `SameSite=<Strict|Lax|None>` (capitalised whatever the input case).
- `sameSite: 'none'` without `secure: true` → throw `Error('SameSite=None requires Secure')` (browsers reject it anyway).
- Join with `"; "`.
