---
slug: "express-p-etag"
title: "Practice: ETags for JSON Responses"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["`Math.imul` multiplies as 32-bit integers, which avoids precision loss. `>>> 0` turns the result unsigned."]
---
# Practice: ETags for JSON Responses

Express adds a **weak ETag** to responses automatically: a short hash of the body. When the client's `If-None-Match` matches, it answers `304` with no body, which saves bandwidth on unchanged data.

The tests use a tiny fake `res` with `status()`, `set()`, `get()`, `json()` and `end()` (header names are stored lowercase), the same shape as Express's.

## Your task
1. `fnv1a(str)`: the 32-bit FNV-1a hash as an unsigned integer. Start with `0x811c9dc5`. For each character code: `hash ^= code`, then `hash = Math.imul(hash, 0x01000193)`. Return `hash >>> 0`.
2. `etagFor(body)`: `W/"<length in hex>-<fnv1a in hex>"`, using the string's length.
3. `sendJson(req, res, data)`: serialise with `JSON.stringify`, set the `ETag` header. If `req.headers['if-none-match']` equals that ETag, respond `res.status(304).end()`. Otherwise `res.status(200).json(data)`.
