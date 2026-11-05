---
slug: "express-p-cors"
title: "Practice: CORS Middleware"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Set `Vary` first, unconditionally. Then branch on whether the origin is allowed.", "Only short-circuit (no `next()`) for an allowed preflight."]
resources: [{"title": "MDN: Cross-Origin Resource Sharing", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}]
---
# Practice: CORS Middleware

Browsers block a page on `https://app.com` from reading responses from `https://api.com` unless the API opts in with **CORS** headers. For "non-simple" requests (JSON bodies, custom headers, `PUT`/`DELETE`) the browser first sends a **preflight** `OPTIONS` request.

The tests use a tiny fake `res` with `status()`, `set()`, `get()`, `json()` and `end()` (header names are stored lowercase), the same shape as Express's.

## Your task
Write `cors({ origins, methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], credentials = false })` returning middleware:
- Always set `Vary: Origin` (so caches don't serve one origin's response to another).
- If `req.headers.origin` is in `origins`, set `Access-Control-Allow-Origin` to **that origin** (never `*` when credentials are involved), and `Access-Control-Allow-Credentials: true` when `credentials` is set.
- For `OPTIONS` requests from an allowed origin: also set `Access-Control-Allow-Methods` (comma-joined, no spaces) and `Access-Control-Allow-Headers` (echo `req.headers['access-control-request-headers']` when present, else `Content-Type`), then `res.status(204).end()` without calling `next`.
- Disallowed origins get no `Allow-*` headers. Call `next()` for every non-preflight request (the browser enforces the block, not the server).
