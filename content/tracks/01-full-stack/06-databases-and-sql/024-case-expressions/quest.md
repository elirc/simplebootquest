---
slug: "sql-case"
title: "CASE Expressions"
type: "code"
language: "sql"
xp: 20
hints: ["`SUM(CASE WHEN condition THEN 1 ELSE 0 END)` counts matching rows."]
---
# CASE Expressions

`CASE` is SQL's if/else, usable anywhere a value is:

```sql
SELECT title,
  CASE
    WHEN pages < 250 THEN 'short'
    WHEN pages < 400 THEN 'medium'
    ELSE 'long'
  END AS length
FROM books;
```

Combined with `SUM`, it's a classic trick for counting several categories in one pass:

```sql
SUM(CASE WHEN genre = 'sci-fi' THEN 1 ELSE 0 END) AS scifi_count
```

## Your task

For each **genre**, return `genre`, `short` (books under 300 pages), `long` (books with 300 or more pages), and `total`. Order by genre.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
