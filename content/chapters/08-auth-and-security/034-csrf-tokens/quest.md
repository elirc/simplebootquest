---
slug: "auth-csrf-tokens"
title: "CSRF Tokens (Double Submit)"
type: "code"
language: "ts"
xp: 25
hints: ["Constant time means: always loop over every character and OR the XOR differences together.", "Check safe methods first and return early."]
resources: [{"title": "OWASP: CSRF prevention", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html"}]
---
# CSRF Tokens (Double Submit)

**Cross-Site Request Forgery**: an evil site makes the victim's browser send a request to your site. The browser attaches your cookies automatically, so the request looks legitimate.

`SameSite=Lax` cookies block most of it. For stronger protection (or older browsers), add a **CSRF token**. The *double-submit* pattern:

1. The server sets a random token in a cookie that JavaScript **can** read (not HttpOnly).
2. The frontend copies it into a header (`X-CSRF-Token`) on every state-changing request.
3. The server checks that the header matches the cookie.

An attacker's site can make the browser *send* your cookie, but it can't *read* it to copy it into the header.

## Your task

1. `generateToken()` returns 32 random bytes as hex.
2. `csrfProtection(req)` returns `{ ok: true }` or `{ ok: false, status: 403, error }`:
   - Safe methods (`GET`, `HEAD`, `OPTIONS`) always pass.
   - Otherwise the `csrf` cookie (from `req.cookies`) and the `x-csrf-token` header must both be present and equal. Compare them with a **constant-time** comparison (`timingSafeEqual`, which you write) to avoid leaking information through timing.
3. `timingSafeEqual(a, b)` compares two strings without returning early. Different lengths return `false`.
