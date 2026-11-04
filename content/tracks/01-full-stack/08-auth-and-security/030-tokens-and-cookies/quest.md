---
slug: auth-tokens-and-cookies
title: Tokens & Cookies
type: code
language: ts
xp: 25
hints: ["A single regex handles the whole Bearer header.", "Convert base64url to base64 before calling `atob`."]
resources: [{"title": "jwt.io debugger", "url": "https://jwt.io/"}]
---
# Tokens & Cookies

Every authenticated request carries its token in one of two places:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjF9.abc
Cookie: token=eyJhbGci...; theme=dark
```

Your auth middleware has to pull the token out of the header *safely*. Header values are attacker-controlled strings.

### Decoding a JWT (without verifying it)

A JWT is `base64url(header).base64url(payload).signature`. Base64url is base64 with `-` in place of `+`, `_` in place of `/`, and no `=` padding.

```ts
const payload = JSON.parse(atob(part.replace(/-/g, '+').replace(/_/g, '/')));
```

⚠️ **Decoding is not verifying.** On the server, always verify the signature, for example with `jwt.verify(token, secret)` from `jsonwebtoken`. Decoding alone is only for reading claims you've already verified, or on the client for display purposes.

## Your task

1. `parseBearer(header)` returns the token from `"Bearer <token>"` (the scheme is case-insensitive, and extra spaces around the token are allowed). Return `null` for missing or malformed headers.
2. `parseCookies(header)` turns `"a=1; b=hello%20world"` into `{ a: '1', b: 'hello world' }`. Ignore empty segments and segments without `=`. Values are URI-decoded, and only the first `=` splits the name from the value.
3. `decodeJwtPayload(token)` returns the decoded payload object, or `null` if the token doesn't have 3 parts or the payload isn't valid base64url JSON.
4. `isExpired(payload, nowSeconds)` returns `true` if `payload.exp` is a number and is `<= nowSeconds`.
