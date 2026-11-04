---
slug: "sql-count-left-join"
title: "Counting Including Zeros"
type: "code"
language: "sql"
xp: 20
hints: ["Use LEFT JOIN and `COUNT(l.id)`, not `COUNT(*)`."]
---
# Counting Including Zeros

A classic bug: counting children with an inner join **drops parents that have zero children**.

```sql
-- ❌ authors with no books disappear
SELECT a.name, COUNT(*) FROM authors a JOIN books b ... GROUP BY a.id;

-- ✅ LEFT JOIN + COUNT(column) counts only non-NULL matches
SELECT a.name, COUNT(b.id) FROM authors a LEFT JOIN books b ... GROUP BY a.id;
```

`COUNT(*)` counts rows, so the NULL-filled row would count as 1. `COUNT(b.id)` counts non-NULL values, which gives 0.

## Your task

For **every member**, return `name` and `loans` (their total number of loans, including 0), ordered by `loans` descending, then name. The setup adds a member who has never borrowed.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
