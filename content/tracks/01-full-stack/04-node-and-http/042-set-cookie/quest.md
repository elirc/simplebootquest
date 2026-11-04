---
slug: "node-set-cookie"
title: "Serializing Set-Cookie"
type: "code"
language: "js"
xp: 20
hints: ["Build an array of parts and join with `\"; \"`.", "Capitalise SameSite: `s[0].toUpperCase() + s.slice(1)`."]
resources: [{"title": "MDN: Set-Cookie", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"}]
---
# Serializing Set-Cookie

Servers set cookies with the `Set-Cookie` response header:

```http
Set-Cookie: session=abc123; Path=/; Max-Age=3600; HttpOnly; Secure; SameSite=Lax
```

Each attribute matters for security:

| Attribute | Effect |
|-----------|--------|
| `HttpOnly` | JavaScript can't read it (it's protected from XSS) |
| `Secure` | only sent over HTTPS |
| `SameSite=Lax/Strict/None` | controls cross-site sending (CSRF protection) |
| `Max-Age` / `Expires` | lifetime. Without one, it's a session cookie |
| `Path` / `Domain` | scope |

To **delete** a cookie, set it again with `Max-Age=0`.

## Your task

1. `serializeCookie(name, value, options)` builds the header value. Encode the value with `encodeURIComponent`, and add attributes in this order: `Path`, `Domain`, `Max-Age` (seconds, a whole number), `HttpOnly`, `Secure`, `SameSite` (capitalised: `Lax`/`Strict`/`None`). Throw an `Error` if `sameSite` is `'none'` without `secure` (browsers reject that combination). Cookie names must match `/^[\w!#$%&'*.^`|~+-]+$/`, otherwise throw.
2. `clearCookie(name, options)` returns the serialization with an empty value and `maxAge: 0`.
