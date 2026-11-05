---
slug: "sql-books-pivot"
title: "SQL: Event kinds per book"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Event kinds per book

For every book that has events, return `title`, `views`, `likes` and `shares` (event counts per kind), ordered by `title`. Use conditional aggregation (`SUM(CASE …)`).

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
