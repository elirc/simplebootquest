---
slug: "sql-books-case"
title: "SQL: Label books by page count"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label books by page count

Return `title` and `band`: `'high'` when `pages` ≥ 576, `'low'` when it's below 184, otherwise `'medium'`. Order by `title`.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
