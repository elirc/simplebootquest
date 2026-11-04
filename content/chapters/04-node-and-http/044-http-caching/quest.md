---
slug: "node-http-caching"
title: "HTTP Caching & ETags"
type: "code"
language: "js"
xp: 25
hints: ["`Math.imul` does 32-bit multiplication, and `>>> 0` makes the result unsigned.", "Split `If-None-Match` on commas and trim each tag."]
resources: [{"title": "MDN: HTTP caching", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"}, {"title": "MDN: ETag", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"}]
---
# HTTP Caching & ETags

The fastest request is the one you don't have to fully answer. HTTP has built-in **conditional requests**:

1. The server sends a response with an `ETag` (a fingerprint of the content): `ETag: "a1b2c3"`.
2. Next time, the client sends `If-None-Match: "a1b2c3"`.
3. If the content hasn't changed, the server replies **`304 Not Modified`** with no body, saving bandwidth.

`Cache-Control` tells caches what they may do:

- `no-store`: never cache (sensitive data)
- `no-cache`: cache, but revalidate every time
- `max-age=3600`: fresh for an hour
- `private` / `public`: only the browser / also shared caches (CDNs)

## Your task

1. `etagFor(body)`: a strong ETag computed from a simple 32-bit FNV-1a hash of the body string, formatted as a quoted hex string (e.g. `"811c9dc5"`). The FNV-1a algorithm: start with `0x811c9dc5`; for each character, XOR it with the char code, then multiply by `0x01000193` (use `Math.imul`), and keep the result unsigned with `>>> 0`.
2. `conditionalResponse(req, body, cacheControl)` returns `{ status, headers, body }`:
   - Always sets `ETag` and `Cache-Control`.
   - If `req.headers['if-none-match']` contains the ETag (a comma-separated list, or `*`), it returns `304` with `body: ''`.
   - Otherwise it returns `200` with the body.
