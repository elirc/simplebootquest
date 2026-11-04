---
slug: "sql-null-handling"
title: "NULL & COALESCE"
type: "code"
language: "sql"
xp: 15
hints: ["`COALESCE(l.returned_on, 'on loan') AS status`"]
---
# NULL & COALESCE

`NULL` means "unknown", and it's contagious: `NULL + 1` is `NULL`, and `NULL = NULL` is not true. Two tools help:

```sql
WHERE returned_on IS NULL            -- test for NULL
COALESCE(returned_on, 'on loan')     -- first non-NULL value
```

`COALESCE` is SQL's `??`.

## Your task

List every loan with columns `id`, `title` and `status`, where `status` is the `returned_on` date, or `'on loan'` if it hasn't been returned. Order by loan `id`.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
