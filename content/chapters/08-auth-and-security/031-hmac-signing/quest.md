---
slug: "auth-hmac-signing"
title: "Signing Tokens with HMAC"
type: "code"
language: "ts"
xp: 30
hints: ["base64url = base64 with `+`→`-`, `/`→`_` and no trailing `=`.", "Sign the string `header.payload` (both already base64url encoded).", "Check the signature before trusting anything in the payload."]
resources: [{"title": "MDN: SubtleCrypto.sign", "url": "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign"}, {"title": "RFC 7519: JWT", "url": "https://datatracker.ietf.org/doc/html/rfc7519"}]
---
# Signing Tokens with HMAC

How does a server know a token it issued hasn't been tampered with? It **signs** it. An HMAC (hash-based message authentication code) combines a **secret key** and the message into a signature. Only someone with the key can produce a valid signature, and changing a single byte of the message breaks it.

JWTs with `alg: HS256` are exactly `base64url(header).base64url(payload).base64url(HMAC-SHA256(secret, header.payload))`.

The Web Crypto API is available in browsers **and** Node:

```ts
const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret),
  { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
```

In real apps, use a maintained library (`jsonwebtoken`, `jose`). Building HS256 once shows you exactly what they verify.

## Your task

1. `base64url(bytes: Uint8Array)` and `base64urlJson(obj)` encode without padding.
2. `sign(payload, secret)` returns a JWT string with the header `{"alg":"HS256","typ":"JWT"}`.
3. `verify(token, secret, nowSeconds)` resolves to the payload, or **throws** `Error('Invalid token')` for a bad format or signature, and `Error('Token expired')` if `payload.exp <= nowSeconds`. Use `crypto.subtle.verify`, which compares signatures in constant time.
