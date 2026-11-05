---
slug: "sql-books-update"
title: "SQL: Update books in one genre"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update books in one genre

Write an `UPDATE` that adds 10 to `pages` for every book whose `genre` is 'classic'. Nothing else may change.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
