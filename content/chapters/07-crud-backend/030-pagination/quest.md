---
slug: crud-pagination
title: Pagination
type: code
language: ts
xp: 25
hints: ["A strict integer regex avoids accepting `\"1.5\"` or `\"abc\"`.", "`totalPages = Math.max(1, Math.ceil(total / pageSize))`."]
resources: [{"title": "Prisma: Pagination", "url": "https://www.prisma.io/docs/orm/prisma-client/queries/pagination"}]
---
# Pagination

Never return an unbounded list. Once a table has 100,000 rows, `GET /todos` without a limit would time out or crash your server. Paginate.

### Offset pagination

The simplest kind: `?page=2&pageSize=20`.

```ts
const [items, total] = await Promise.all([
  prisma.todo.findMany({ skip: (page - 1) * pageSize, take: pageSize, orderBy: { id: 'asc' } }),
  prisma.todo.count(),
]);
```

Respond with the data **and** metadata, so the UI can render page controls:

```json
{
  "data": [ ... ],
  "meta": { "page": 2, "pageSize": 20, "total": 95, "totalPages": 5 }
}
```

*(Offset pagination gets slow on huge tables, and rows can shift between pages while users browse. Cursor pagination, `?after=<lastId>`, solves both. Offset is fine for most apps.)*

### Query strings are untrusted strings

`?page=abc`, `?page=-5` and `?pageSize=1000000` will all be sent by someone eventually. Parse defensively: fall back to defaults, and **clamp** to sensible bounds.

## Your task

1. `parsePagination(query)` reads `query.page` and `query.pageSize` (strings or undefined). Return `{ page, pageSize, skip, take }`:
   - `page`: a whole number ≥ 1, defaulting to `1`. Invalid values become `1`.
   - `pageSize`: a whole number, defaulting to `20` and clamped to `1..100`. Non-numeric values become `20`.
   - `skip = (page - 1) * pageSize`, `take = pageSize`.
2. `paginate(items, total, page, pageSize)` returns `{ data: items, meta: { page, pageSize, total, totalPages, hasNext, hasPrev } }`. `totalPages` is at least `1`.
