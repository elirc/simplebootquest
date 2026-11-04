---
slug: ts-boss-typed-store
title: "Boss: Generic Typed Repository"
type: code
language: ts
xp: 60
boss: true
hints: ["Store records in a `Map<number, T>` and always return copies (`{ ...record }`).", "A `matches(record, where)` helper can be reused by `findMany` and `count`."]
---
# Boss: Generic Typed Repository

Your Chapter 1 todo list only stored todos. Real backends store users, posts, comments... You'll write **one generic repository** that stores *any* entity type with full type safety. This is the same shape as the data-access layer you'll put in front of Postgres later.

Implement `createRepository<T extends { id: number }>()`, which returns:

| Method | Behaviour |
|--------|-----------|
| `create(data: Omit<T, 'id'>): T` | Assigns the next id (starting at 1) and stores a copy. Returns it. |
| `findById(id): T \| undefined` | Returns a **copy**. Changing it must not change the stored record. |
| `findMany(options?)` | Returns copies. `options.where` is a `Partial<T>`: keep records whose fields all `===` those values. `options.orderBy` is `{ field: keyof T, direction: 'asc' \| 'desc' }`. `options.limit` caps the result. |
| `update(id, patch: Partial<Omit<T, 'id'>>): T` | Applies the patch and returns the updated copy. Throws `NotFoundError` if missing. |
| `delete(id): void` | Throws `NotFoundError` if missing. |
| `count(where?)` | Number of records matching `where`. |

Also define a `NotFoundError` class (extends `Error`, `name = 'NotFoundError'`) with the message `"Record <id> not found"`.

The `findMany` options are deliberately shaped like Prisma's API (`where`, `orderBy`, `take`/limit). You'll recognise them in Chapter 6.
