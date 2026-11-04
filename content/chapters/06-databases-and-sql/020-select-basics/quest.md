---
slug: sql-select-basics
title: SELECT Basics
type: code
language: sql
xp: 15
hints: ["List the columns: `SELECT title, year`.", "Sort by two keys: `ORDER BY year DESC, title ASC`."]
resources: [{"title": "SQLite docs: SELECT", "url": "https://www.sqlite.org/lang_select.html"}, {"title": "SQLBolt interactive lessons", "url": "https://sqlbolt.com/"}]
---
# SELECT Basics

`SELECT` reads data:

```sql
SELECT title, year      -- which columns (* means all)
FROM books              -- which table
ORDER BY year DESC      -- sort (ASC is the default)
LIMIT 5;                -- at most 5 rows
```

You can compute columns and rename them with `AS`:

```sql
SELECT title, pages / 30 AS days_to_read FROM books;
```

SQL keywords aren't case-sensitive, but writing them in UPPERCASE is the convention.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```

`returned_on` is `NULL` while a book is still out on loan.

## Your task

Write a query that returns the **title** and **year** of every book, sorted **newest first**. If two books share a year, sort them by title A→Z.
