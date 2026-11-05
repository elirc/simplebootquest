---
slug: "sql-books-rank"
title: "SQL: Rank books within each genre"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank books within each genre

Return `genre`, `title`, `pages` and `rank`: the `RANK()` by `pages` (highest first) **within each** `genre`. Order by `genre`, `rank`, `title`.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
