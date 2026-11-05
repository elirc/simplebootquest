---
slug: "sql-books-where"
title: "SQL: Books with page count above 454"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Books with page count above 454

Return the `title` and `pages` of books whose `pages` is greater than 454, ordered by `pages` descending, then `title`.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
