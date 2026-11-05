---
slug: "sql-books-in"
title: "SQL: Books in some genres"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Books in some genres

Return `id` and `title` of books whose `genre` is 'classic' or 'fiction', ordered by `id`. Use `IN`.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
