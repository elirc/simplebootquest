---
slug: "auth-p-base64url"
title: "Practice: Base64url Encoding"
type: "code"
language: "js"
xp: 15
hints: ["`btoa` only accepts characters 0–255, so turn UTF-8 bytes into a \"binary string\" with `String.fromCharCode`.", "Padding length is `(4 - len % 4) % 4`."]
resources: [{"title": "RFC 4648 §5: Base64url", "url": "https://www.rfc-editor.org/rfc/rfc4648#section-5"}]
---
# Practice: Base64url Encoding

JWTs, signed cookies and many API tokens use **base64url**: base64 with `+` → `-`, `/` → `_`, and no `=` padding, so the result is safe in URLs and headers.

In the browser and in Node, `btoa` and `atob` work on **binary strings** (one character per byte). To encode arbitrary Unicode text, convert it to UTF-8 bytes first with `TextEncoder`.

## Your task
1. `encode(text)`: UTF-8 encode, base64 with `btoa`, then make it URL-safe and strip padding.
2. `decode(b64url)`: reverse it (restore `+` `/` and padding to a multiple of 4, `atob`, then `TextDecoder`). Throw `Error('Invalid base64url')` if the input contains characters outside `A–Z a–z 0–9 - _`, or if `atob` throws.
