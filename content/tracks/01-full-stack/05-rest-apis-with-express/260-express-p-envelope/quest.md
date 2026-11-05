---
slug: "express-p-envelope"
title: "Practice: Consistent Response Envelopes"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Only add a key when it was provided. `{ data }` vs `{ data, meta }` keeps `meta: undefined` out of the JSON shape."]
---
# Practice: Consistent Response Envelopes

Clients are much easier to write when every response has the same shape:

```json
{ "data": [...], "meta": { "page": 1, "total": 42 } }
{ "error": { "code": "NOT_FOUND", "message": "Todo not found" } }
```

Small helpers enforce it, so no handler can invent its own format.

The tests use a tiny fake `res` with `status()`, `set()`, `get()`, `json()` and `end()` (header names are stored lowercase), the same shape as Express's.

## Your task
1. `ok(res, data, meta)`: status 200, body `{ data }`, plus `meta` only when it's given.
2. `created(res, data, location)`: status 201 with `{ data }`. When `location` is given, set the `Location` header.
3. `noContent(res)`: status 204 and `end()`.
4. `fail(res, status, code, message, details)`: body `{ error: { code, message } }`, plus `details` inside `error` only when given.
5. `paginated(res, items, { page, limit, total })`: calls `ok` with `meta: { page, limit, total, totalPages }`, where `totalPages = ceil(total / limit)`.
