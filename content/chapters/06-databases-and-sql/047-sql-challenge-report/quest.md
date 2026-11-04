---
slug: "sql-challenge-report"
title: "Challenge: Monthly Library Report"
type: "code"
language: "sql"
xp: 30
hints: ["Use LEFT JOINs so Margaret (no loans) still appears.", "Window functions can order by an aggregate: `ROW_NUMBER() OVER (PARTITION BY member_id ORDER BY COUNT(*) DESC, genre)`."]
---
# Challenge: Monthly Library Report

Put it all together: joins, grouping, CASE and ordering.

For each **member**, report:

- `member`: their name
- `total_loans`: all their loans
- `active`: loans not yet returned
- `favourite_genre`: the genre they've borrowed most (ties broken alphabetically), or `NULL` if they've never borrowed anything
- `pages_read`: the total pages of **returned** books (0 if none)

Order by `total_loans` descending, then by name. The setup adds a member with no loans.

Tip: build it in CTEs. One for the per-member totals, one for the favourite genre with `ROW_NUMBER()`.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
