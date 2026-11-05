---
slug: "sql-movies-case"
title: "SQL: Label movies by rating"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label movies by rating

Return `title` and `band`: `'high'` when `rating` ≥ 7.9, `'low'` when it's below 5, otherwise `'medium'`. Order by `title`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
