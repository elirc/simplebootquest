---
slug: "sql-books-avg"
title: "SQL: Average page count per genre"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average page count per genre

Return `genre` and `avg_pages` (the average `pages` rounded to 1 decimal place) per `genre`, ordered by `genre`.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
