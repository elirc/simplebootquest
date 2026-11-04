---
slug: "sql-left-join"
title: "LEFT JOIN: Finding What's Missing"
type: "code"
language: "sql"
xp: 20
hints: ["LEFT JOIN loans, then keep the rows where the loan side is NULL."]
---
# LEFT JOIN: Finding What's Missing

An inner `JOIN` drops rows without a match. A `LEFT JOIN` keeps every row from the left table, with `NULL`s for the missing side, which makes it perfect for "which X have **no** Y?":

```sql
SELECT m.name
FROM members m
LEFT JOIN loans l ON l.member_id = m.id
WHERE l.id IS NULL;           -- members who never borrowed anything
```

## Your task

List the titles of books that have **never been borrowed**, ordered by title.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
