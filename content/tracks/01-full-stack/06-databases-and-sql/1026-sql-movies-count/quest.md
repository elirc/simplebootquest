---
slug: "sql-movies-count"
title: "SQL: Count movies per genre"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count movies per genre

Return `genre` and `total` (the number of movies) for each `genre`, ordered by `total` descending, then `genre`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
