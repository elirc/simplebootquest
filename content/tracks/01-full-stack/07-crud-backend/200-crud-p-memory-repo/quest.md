---
slug: "crud-p-memory-repo"
title: "Practice: An In-Memory Repository"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["A `Map` keyed by id makes findById, update and delete simple.", "Destructure the forbidden fields out of `data` before merging: `const { id, createdAt, ...rest } = data`."]
---
# Practice: An In-Memory Repository

The **repository pattern** hides *how* data is stored behind a small interface. Your services call `todoRepo.findMany(...)` and don't care whether it's Prisma, raw SQL or (in tests) a plain array. An in-memory version is great for fast unit tests of the service layer.

## Your task
Write `createRepo({ now = () => new Date().toISOString() } = {})` returning:
- `create(data)`: assigns `id` (1, 2, 3…), `createdAt` and `updatedAt` (both `now()`), stores the record and returns it.
- `findById(id)`: the record or `null`.
- `findMany({ where = {}, orderBy, take, skip = 0 } = {})`: records whose fields **equal** every key in `where`. `orderBy` is like `{ title: 'asc' }` or `{ createdAt: 'desc' }`. Then apply `skip` and `take`. Without `orderBy`, keep insertion order.
- `update(id, data)`: merges `data`, refreshes `updatedAt`, and returns the record, or `null` if it doesn't exist. `id` and `createdAt` can't be changed.
- `delete(id)`: returns `true` if something was deleted.

**Always return copies**, so callers can't mutate the stored data by accident (a real database wouldn't let them either).
