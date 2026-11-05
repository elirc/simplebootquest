---
slug: "sql-books-between"
title: "SQL: Books in a page count range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Books in a page count range

Return the `title`s of books with `pages` between 184 and 576 (inclusive), ordered by `pages`, then `title`.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
