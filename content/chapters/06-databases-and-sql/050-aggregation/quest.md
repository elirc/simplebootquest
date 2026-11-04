---
slug: sql-aggregation
title: GROUP BY & Aggregates
type: code
language: sql
xp: 25
hints: ["`GROUP BY a.id, a.name` then `HAVING COUNT(b.id) > 1`.", "Alias aggregate columns with AS to match the expected names."]
---
# GROUP BY & Aggregates

Aggregate functions summarise many rows into one: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.

```sql
SELECT COUNT(*) AS total_books, AVG(pages) AS avg_pages FROM books;
```

`GROUP BY` makes one summary row **per group**:

```sql
SELECT genre, COUNT(*) AS books
FROM books
GROUP BY genre;
```

`HAVING` filters **groups**, after aggregation. `WHERE` filters rows *before* grouping:

```sql
SELECT genre, COUNT(*) AS books
FROM books
WHERE year > 1970        -- filter rows first
GROUP BY genre
HAVING COUNT(*) >= 3;    -- then filter groups
```

Dashboards ("orders per day", "revenue per product") are built from exactly these queries.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```

`returned_on` is `NULL` while a book is still out on loan.

## Your task

For each author with **more than one** book, return `author` (their name), `books` (how many books they have) and `total_pages` (the sum of their books' pages). Order by `books` descending, then by author name.
