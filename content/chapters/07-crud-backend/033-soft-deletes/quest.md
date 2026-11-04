---
slug: "crud-soft-deletes"
title: "Soft Deletes"
type: "code"
language: "ts"
xp: 20
hints: ["A `live()` helper that filters out deleted rows keeps every read query safe.", "Compare millisecond timestamps for the 30-day window."]
---
# Soft Deletes

Sometimes "delete" shouldn't really delete. Users want an "undo" or a trash folder, and auditors want history. **Soft delete** sets a `deletedAt` timestamp instead:

```ts
await prisma.post.update({ where: { id }, data: { deletedAt: new Date() } });
// and every normal query must now exclude them:
await prisma.post.findMany({ where: { deletedAt: null } });
```

The danger: forgetting the `deletedAt: null` filter in **one** query leaks "deleted" data. Centralise the filter in your repository.

## Your task

Implement `createSoftDeleteRepo(now)` with an in-memory store:

- `create(data)` assigns incremental ids, with `deletedAt: null`.
- `findAll()` / `findById(id)` exclude soft-deleted records.
- `remove(id)` sets `deletedAt` to `now()` and returns `true`, or `false` if the record is missing or already deleted.
- `restore(id)` clears `deletedAt` if the record was deleted **within 30 days**, and returns `true`. Otherwise it returns `false`.
- `trash()` lists the deleted records, newest deletion first.
- `purge()` permanently removes records deleted more than 30 days ago, and returns how many were removed.

`now()` returns a `Date` and is injected for testing.
