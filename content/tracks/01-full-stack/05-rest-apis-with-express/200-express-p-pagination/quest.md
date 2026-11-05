---
slug: "express-p-pagination"
title: "Practice: Pagination Parameters"
type: "code"
language: "js"
xp: 15
hints: ["A regex like `/^\\\\d+$/` only accepts digit strings, which rules out decimals, negatives and arrays at once."]
---
# Practice: Pagination Parameters

List endpoints must be paginated, or one day `GET /todos` returns 2 million rows. Query params arrive as **strings** (or arrays, or missing), so parsing them defensively is step one.

```
GET /todos?page=3&limit=50
```

## Your task
Write `parsePagination(query)` returning `{ page, limit, offset }`:
- `page` defaults to 1, `limit` defaults to 20.
- Both must be positive integers. Anything else (`"abc"`, `"0"`, `"-2"`, `"1.5"`, an array) falls back to the default.
- `limit` is capped at 100. Never let clients ask for unlimited rows.
- `offset = (page - 1) * limit`, ready for SQL `OFFSET` or Prisma's `skip`.
