---
slug: "sql-movies-not-exists"
title: "SQL: Movies with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Movies with no events

Return the `title`s of movies that have **no** rows in `movie_events`, ordered by `title`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
