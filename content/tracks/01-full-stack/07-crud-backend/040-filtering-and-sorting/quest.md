---
slug: crud-filtering-and-sorting
title: Filtering & Sorting
type: code
language: ts
xp: 30
hints: ["Start `where` with `{ ownerId: userId }` so nothing can override it.", "Strip a leading `-` to get the field, then check it against an allow-list."]
resources: [{"title": "Prisma: Filtering and sorting", "url": "https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting"}]
---
# Filtering & Sorting

List endpoints usually support query options like:

```
GET /api/todos?done=false&q=milk&sort=-createdAt
```

Your job is to translate those **untrusted strings** into a safe database query. With Prisma, that means building `where` and `orderBy` objects:

```ts
prisma.todo.findMany({
  where: {
    ownerId: user.id,
    done: false,
    title: { contains: 'milk', mode: 'insensitive' },
  },
  orderBy: { createdAt: 'desc' },
});
```

### Allow-lists, not deny-lists

If you pass `sort` straight through (`orderBy: { [req.query.sort]: 'asc' }`), users can sort by **any** column, including ones that leak information (`passwordHash`!) or have no index and are slow. Always check against an **allow-list** of permitted fields.

### Convention: `-field` means descending

`sort=title` → ascending, `sort=-createdAt` → descending.

## Your task

Implement `buildTodoQuery(userId, query)`, which returns `{ where, orderBy }` for Prisma:

- `where.ownerId` is always `userId`. Never let the query override it.
- `done`: `"true"` → `true`, `"false"` → `false`. Anything else: no filter.
- `q`: if it's non-empty after trimming → `title: { contains: <trimmed>, mode: 'insensitive' }`.
- `priority`: one of `low`, `medium`, `high` → `priority: <value>`. Otherwise ignore it.
- `sort`: one of `title`, `createdAt`, `priority`, with an optional `-` prefix. Default: `{ createdAt: 'desc' }`. Unknown fields fall back to the default.
