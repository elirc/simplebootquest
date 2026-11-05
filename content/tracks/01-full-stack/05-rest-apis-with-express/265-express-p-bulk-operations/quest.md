---
slug: "express-p-bulk-operations"
title: "Practice: Bulk Operations with Partial Failure"
type: "code"
language: "js"
xp: 15
hints: ["`Promise.all` runs everything at once and fails fast. Use a plain `for` loop with `await` and a try/catch per item instead."]
resources: [{"title": "MDN: 207 Multi-Status", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207"}]
---
# Practice: Bulk Operations with Partial Failure

`POST /todos/bulk` with 100 items: what if item 37 is invalid? Two reasonable designs:

1. **All or nothing**: wrap everything in a transaction, and return 400 if anything fails.
2. **Partial success**: process each item, and report per-item results. Use this when items are independent, such as importing contacts.

## Your task
Implement design 2. Write `async runBulk(items, handler, { maxItems = 100 } = {})`:
- More than `maxItems` items → throw `Error('Too many items (max <maxItems>)')` before processing any.
- Call `await handler(item, index)` for each item **sequentially** (to keep database load predictable).
- Each result is `{ index, ok: true, data }`, or `{ index, ok: false, error: message }` if the handler threw.
- Return `{ status, results, succeeded, failed }`, where status is `200` if all succeeded, `207` (Multi-Status) if some did, and `422` if none did. An empty list → status 200.
