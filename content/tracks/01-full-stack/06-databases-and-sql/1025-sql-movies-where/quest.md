---
slug: "sql-movies-where"
title: "SQL: Movies with rating above 7.3"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Movies with rating above 7.3

Return the `title` and `rating` of movies whose `rating` is greater than 7.3, ordered by `rating` descending, then `title`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
