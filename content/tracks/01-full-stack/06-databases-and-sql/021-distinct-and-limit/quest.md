---
slug: "sql-distinct-limit"
title: "DISTINCT, LIMIT & OFFSET"
type: "code"
language: "sql"
xp: 15
hints: ["Page 2 with 4 per page skips the first 4 rows: `OFFSET 4`."]
---
# DISTINCT, LIMIT & OFFSET

```sql
SELECT DISTINCT genre FROM books;          -- unique values only
SELECT * FROM books ORDER BY year LIMIT 3;          -- first 3 rows
SELECT * FROM books ORDER BY year LIMIT 3 OFFSET 3; -- rows 4–6: page 2!
```

`LIMIT`/`OFFSET` is how offset pagination works in SQL: page `p` with size `n` is `LIMIT n OFFSET (p - 1) * n`.

⚠️ **Always `ORDER BY` when paginating.** Without it, the database may return rows in any order, so pages can overlap or skip rows.

## Your task

Return **page 2** of the books, with **4 books per page**, ordered by `title` A→Z. Return just the `title` column.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
