---
slug: "sql-window-functions"
title: "Window Functions"
type: "code"
language: "sql"
xp: 30
hints: ["`ROW_NUMBER() OVER (PARTITION BY genre ORDER BY pages DESC)` numbers books within each genre.", "You cannot filter on a window function in WHERE directly, so wrap it in a CTE."]
resources: [{"title": "PostgreSQL: Window functions tutorial", "url": "https://www.postgresql.org/docs/current/tutorial-window.html"}]
---
# Window Functions

Window functions compute values **across related rows without collapsing them** (unlike `GROUP BY`):

```sql
SELECT title, genre, pages,
  RANK() OVER (PARTITION BY genre ORDER BY pages DESC) AS rank_in_genre,
  AVG(pages) OVER (PARTITION BY genre) AS genre_avg
FROM books;
```

- `PARTITION BY`: the "groups" (like GROUP BY, but rows are kept).
- `ORDER BY` inside `OVER`: the order within each partition.
- `ROW_NUMBER()`, `RANK()`, `LAG()`, `LEAD()`, and running `SUM()`.

They're the standard way to answer "top N per group" and "running totals" questions.

## Your task

Return the **longest book in each genre**: `genre`, `title` and `pages`, ordered by genre. Use `ROW_NUMBER()` in a subquery or CTE, then keep row 1.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
