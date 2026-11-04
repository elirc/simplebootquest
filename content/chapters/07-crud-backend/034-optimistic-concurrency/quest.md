---
slug: "crud-optimistic-concurrency"
title: "Optimistic Concurrency Control"
type: "code"
language: "ts"
xp: 25
hints: ["Compare `doc.version !== expectedVersion` before writing.", "Always store and return copies, so callers cannot change the stored version."]
resources: [{"title": "Martin Fowler: Optimistic Offline Lock", "url": "https://martinfowler.com/eaaCatalog/optimisticOfflineLock.html"}]
---
# Optimistic Concurrency Control

Two people open the same document. Both edit it. The second save silently overwrites the first: a **lost update**.

**Optimistic concurrency** gives each record a `version` number:

1. The client reads `{ ..., version: 3 }`.
2. It saves with "update **where version = 3**, and set version = 4".
3. If someone else saved in between, the version is now 4, zero rows match, and the server answers **409 Conflict**. The client reloads and merges.

```ts
const result = await prisma.doc.updateMany({
  where: { id, version: expectedVersion },
  data: { ...changes, version: { increment: 1 } },
});
if (result.count === 0) throw new ConflictError();
```

This is the same **conditional update** that keeps this app's XP awards from being granted twice.

## Your task

`createDocStore()` returns:

- `create(content)` → `{ id, content, version: 1 }`
- `get(id)` → a copy of the document, or `undefined`
- `update(id, content, expectedVersion)` → the updated doc with `version + 1`. Throw `ConflictError` (provided) if the version doesn't match, with a `current` property holding a copy of the latest doc. Throw `NotFoundError` if it's missing.
