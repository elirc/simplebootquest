---
slug: "sql-books-insert"
title: "SQL: Insert a new book"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new book

Insert a book with id 100, `title` 'New book', `pages` 454, `year` 1813, `genre` 'classic', `available` 0. Then return how many books have that `genre` as `total`.

Tables: `books` and `book_events` (open the setup to see the data). Column names in SQL are snake_case.
