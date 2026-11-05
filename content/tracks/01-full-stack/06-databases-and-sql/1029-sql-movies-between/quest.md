---
slug: "sql-movies-between"
title: "SQL: Movies in a rating range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Movies in a rating range

Return the `title`s of movies with `rating` between 5 and 7.9 (inclusive), ordered by `rating`, then `title`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
