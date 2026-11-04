---
slug: "node-cors"
title: "CORS Decisions"
type: "code"
language: "js"
xp: 25
hints: ["Handle the disallowed and no-origin cases first, with guard clauses.", "A preflight is an `OPTIONS` request that has `access-control-request-method`."]
resources: [{"title": "MDN: CORS", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}]
---
# CORS Decisions

Browsers block a page on `https://app.com` from reading responses from `https://api.com` unless the API opts in with **CORS** headers:

```http
Access-Control-Allow-Origin: https://app.com
Access-Control-Allow-Credentials: true
Vary: Origin
```

For "non-simple" requests (like a `PUT`, or `Content-Type: application/json`), the browser first sends a **preflight** `OPTIONS` request asking for permission:

```http
OPTIONS /api/todos/1
Origin: https://app.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: content-type
```

and the server answers with what's allowed, usually `204` and some `Access-Control-Allow-*` headers.

**CORS is a browser protection, not server security.** `curl` ignores it completely. Never use it as a substitute for authentication.

## Your task

`corsHeaders(req, config)` returns `{ status, headers }`, where `config` is `{ origins: string[], methods: string[], headers: string[], credentials: boolean, maxAge: number }`:

- No `Origin` header, or an origin that isn't allowed → `{ status: 200, headers: {} }` (for a disallowed preflight, `status: 403`).
- An allowed origin → `Access-Control-Allow-Origin: <that exact origin>` (never `*` when credentials are on), plus `Vary: Origin`, and `Access-Control-Allow-Credentials: 'true'` if enabled.
- A preflight (`OPTIONS` with `access-control-request-method`): also add `Access-Control-Allow-Methods` and `Access-Control-Allow-Headers` (comma-joined) and `Access-Control-Max-Age`, with `status: 204`. If the requested method isn't allowed → `403` with no headers.
- Otherwise `status: 200`.
