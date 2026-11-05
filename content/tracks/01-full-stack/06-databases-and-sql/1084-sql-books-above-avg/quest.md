---
slug: "sql-books-above-avg"
title: "SQL: Books above the average page count"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Books above the average page count

Return the `title`s of books whose `pages` is above the overall average, ordered by `title`. Use a subquery.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
