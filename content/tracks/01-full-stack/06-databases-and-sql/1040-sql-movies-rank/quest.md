---
slug: "sql-movies-rank"
title: "SQL: Rank movies within each genre"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank movies within each genre

Return `genre`, `title`, `rating` and `rank`: the `RANK()` by `rating` (highest first) **within each** `genre`. Order by `genre`, `rank`, `title`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
