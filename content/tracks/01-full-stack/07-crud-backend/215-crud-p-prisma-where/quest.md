---
slug: "crud-p-prisma-where"
title: "Practice: Building a Prisma `where` from Query Params"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Start from `{ userId }` and add keys one by one. Never spread the raw query into the filter."]
resources: [{"title": "Prisma: Filtering and sorting", "url": "https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting"}]
---
# Practice: Building a Prisma `where` from Query Params

A search endpoint like

```
GET /todos?q=milk&done=false&from=2026-01-01&to=2026-02-01&tags=home,urgent
```

has to become a Prisma filter object. Building it in a pure function makes it easy to test and keeps the handler tiny.

## Your task
Write `buildWhere(userId, query)` returning a Prisma `where` object:
- Always `{ userId }`.
- `q` (trimmed, non-empty) → `title: { contains: q, mode: 'insensitive' }`.
- `done` → `done: true` / `false` only for the strings `'true'` and `'false'`. Ignore other values.
- `from` and/or `to` → `createdAt: { gte: new Date(from), lt: new Date(to) }`, including only the bounds that are given. Ignore an invalid date.
- `tags` (comma-separated) → `tags: { some: { name: { in: [...] } } }`, trimmed, with empty entries removed.
