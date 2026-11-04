---
slug: "sql-subqueries"
title: "Subqueries"
type: "code"
language: "sql"
xp: 20
hints: ["Inside EXISTS, join books and loans and correlate with `b.author_id = a.id`."]
---
# Subqueries

A query inside a query:

```sql
-- books longer than the average
SELECT title FROM books WHERE pages > (SELECT AVG(pages) FROM books);

-- members who have a book out right now
SELECT name FROM members
WHERE id IN (SELECT member_id FROM loans WHERE returned_on IS NULL);

-- EXISTS: true if the subquery returns any row
SELECT name FROM authors a
WHERE EXISTS (SELECT 1 FROM books b WHERE b.author_id = a.id AND b.year > 2000);
```

## Your task

Return the `name` of every author who has at least one book that is **currently on loan**, using `EXISTS` or `IN`. Order by name.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
