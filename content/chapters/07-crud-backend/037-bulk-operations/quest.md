---
slug: "crud-bulk-operations"
title: "Bulk Operations with Per-Item Results"
type: "code"
language: "ts"
xp: 25
hints: ["`for (const [index, operation] of operations.entries())` gives you both.", "Wrap each operation in its own try/catch so one failure does not stop the rest."]
---
# Bulk Operations with Per-Item Results

"Mark these 50 todos as done" shouldn't be 50 requests. Bulk endpoints accept many items, and a good one reports **per-item** results, because some items may fail while others succeed:

```http
POST /api/todos/bulk
{ "operations": [ { "op": "update", "id": 1, "data": { "done": true } }, { "op": "delete", "id": 999 } ] }

207 Multi-Status
{ "results": [ { "index": 0, "status": 200 }, { "index": 1, "status": 404, "error": "Not found" } ] }
```

Two design choices:

- **All-or-nothing** (wrap everything in a transaction), or
- **Best-effort** with per-item statuses (shown here).

Also cap the batch size, because unbounded bulk endpoints are a denial-of-service risk.

## Your task

`runBulk(operations, repo)` (the repo methods are async: `create(data)`, `update(id, data)`, `delete(id)`, each throwing an error with `status` on failure):

- More than 100 operations → throw `Error('Too many operations')`.
- Run the operations **in order**, and record `{ index, status, id?, error? }` for each:
  - `create` → `201` with the new `id`
  - `update` → `200`
  - `delete` → `204`
  - an unknown `op` → `400`, `error: 'Unknown operation'`
  - a thrown error → its `status` (default `500`) and `message`
- Return `{ results, succeeded, failed }`.
