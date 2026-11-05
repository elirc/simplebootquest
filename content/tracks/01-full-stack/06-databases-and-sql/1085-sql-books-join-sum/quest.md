---
slug: "sql-books-join-sum"
title: "SQL: Total event amount per book"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Total event amount per book

Join `books` with `book_events` and return `title` and `total` (the sum of `amount`) for books that have events, ordered by `total` descending, then `title`.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
