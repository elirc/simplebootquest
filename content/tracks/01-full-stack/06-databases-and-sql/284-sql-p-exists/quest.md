---
slug: "sql-p-exists"
title: "Practice: EXISTS"
type: "code"
language: "sql"
xp: 20
---
# Practice: EXISTS

`EXISTS (subquery)` is true when the subquery returns **at least one row**. The database can stop at the first match, and unlike a join it never duplicates the outer rows.

This quest uses the **library** database: `authors`, `books`, `members` and `loans`.

## Your task
Return the `name` of every author who has **both** a `sci-fi` book and a book with more than 300 pages (not necessarily the same book). Use `EXISTS`. Order by name.
