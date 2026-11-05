---
slug: "sql-movies-running"
title: "SQL: Running total of rating"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Running total of rating

Return `id`, `rating` and `running_total`: the cumulative sum of `rating` ordered by `id`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
