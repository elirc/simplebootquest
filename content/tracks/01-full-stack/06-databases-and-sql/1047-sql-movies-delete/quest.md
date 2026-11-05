---
slug: "sql-movies-delete"
title: "SQL: Delete movies below a rating"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Delete movies below a rating

Delete every movie whose `rating` is below 5 **and** that has no rows in `movie_events` (never delete rows other tables reference).

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
