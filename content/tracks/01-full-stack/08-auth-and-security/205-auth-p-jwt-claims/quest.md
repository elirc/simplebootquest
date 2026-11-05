---
slug: "auth-p-jwt-claims"
title: "Practice: Checking JWT Claims"
type: "code"
language: "js"
xp: 15
hints: ["`exp` is in SECONDS, while `now` is in milliseconds. Divide `now` by 1000.", "Wrap the decoding in try/catch, because `atob` and `JSON.parse` both throw on garbage."]
resources: [{"title": "RFC 7519: JSON Web Token claims", "url": "https://www.rfc-editor.org/rfc/rfc7519#section-4.1"}, {"title": "jwt.io debugger", "url": "https://jwt.io"}]
---
# Practice: Checking JWT Claims

A JWT is `header.payload.signature`, each part base64url-encoded. **Anyone can read the payload**, because it isn't encrypted, so never put secrets in it. The signature only proves it wasn't modified.

After the signature is verified (a library does that part), you still have to check the **claims**:

| Claim | Meaning |
|-------|---------|
| `exp` | Expires at (seconds since epoch) |
| `nbf` | Not valid before |
| `iss` | Who issued it |
| `aud` | Who it's meant for |

## Your task
`decodeSegment(seg)` is provided: it turns a base64url segment into a JSON object. Write `checkClaims(token, { now, issuer, audience, leewaySec = 30 })`, where `now` is in **milliseconds**:
- Not exactly three dot-separated parts, or the parts can't be decoded → `{ valid: false, reason: 'malformed' }`.
- Header `alg` of `'none'` → `{ valid: false, reason: 'alg none not allowed' }` (a classic attack).
- `exp` missing, or `now` past `exp + leeway` → `'expired'`.
- `nbf` set and `now` before `nbf - leeway` → `'not yet valid'`.
- `iss !== issuer` → `'wrong issuer'`.
- `aud` (a string or an array) doesn't include `audience` → `'wrong audience'`.
- Otherwise `{ valid: true, payload }`.
