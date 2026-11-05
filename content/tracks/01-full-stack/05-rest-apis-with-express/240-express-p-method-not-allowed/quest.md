---
slug: "express-p-method-not-allowed"
title: "Practice: 404 vs 405"
type: "code"
language: "js"
xp: 15
hints: ["Write a small `matches(pattern, path)` helper first: same number of segments, and each one is equal or a `:param`."]
---
# Practice: 404 vs 405

`DELETE /todos` (on the collection) when you only support `GET` and `POST` isn't "not found": the resource exists, but the method doesn't. The correct answer is **405 Method Not Allowed** with an `Allow` header listing what *is* allowed.

The tests use a tiny fake `res` with `status()`, `set()`, `get()`, `json()` and `end()` (header names are stored lowercase), the same shape as Express's.

## Your task
Write `methodGuard(routes)`, where `routes` maps paths to the methods they support, e.g. `{ '/todos': ['GET', 'POST'], '/todos/:id': ['GET', 'PATCH', 'DELETE'] }`. It returns middleware that:
- Matches `req.path` against the route patterns (`:param` segments match any one non-empty segment).
- No match → call `next()` (let the normal 404 handler deal with it).
- Method supported → `next()`.
- `HEAD` is allowed wherever `GET` is, and `OPTIONS` is always allowed.
- Otherwise → set `Allow` to the supported methods (plus `HEAD` if GET is supported) joined with `", "`, and respond `405` with `{ error: 'Method Not Allowed' }`.
