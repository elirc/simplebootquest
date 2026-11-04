---
slug: "sql-ctes"
title: "Common Table Expressions (WITH)"
type: "code"
language: "sql"
xp: 25
hints: ["First CTE: count loans per book. Then LEFT JOIN it to books and SUM per genre.", "COALESCE turns a NULL sum into 0."]
resources: [{"title": "PostgreSQL: WITH queries", "url": "https://www.postgresql.org/docs/current/queries-with.html"}]
---
# Common Table Expressions (WITH)

Complex queries get readable when you name intermediate results:

```sql
WITH loan_counts AS (
  SELECT book_id, COUNT(*) AS times
  FROM loans
  GROUP BY book_id
)
SELECT b.title, lc.times
FROM books b
JOIN loan_counts lc ON lc.book_id = b.id;
```

A CTE is like a `const` in SQL. Write each step, then combine them. Most analysts write every non-trivial query this way.

## Your task

Using a CTE, list each **genre** with `genre` and `loan_count` (how many loans books of that genre have had, including 0), ordered by `loan_count` descending, then genre.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
