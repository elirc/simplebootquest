---
slug: "sql-movies-join-sum"
title: "SQL: Total event amount per movie"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Total event amount per movie

Join `movies` with `movie_events` and return `title` and `total` (the sum of `amount`) for movies that have events, ordered by `total` descending, then `title`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
