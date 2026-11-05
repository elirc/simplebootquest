---
slug: "sql-books-bool"
title: "SQL: Count available books"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count available books

Booleans are stored as 0/1 in SQLite. Return `genre` and `total` (how many books have `available` = 1) per `genre`, including groups with zero, ordered by `genre`.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
