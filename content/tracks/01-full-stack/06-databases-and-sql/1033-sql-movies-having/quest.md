---
slug: "sql-movies-having"
title: "SQL: Genres with several movies"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Genres with several movies

Return `genre` and `total` for groups that have **at least 2** movies, ordered by `genre`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
