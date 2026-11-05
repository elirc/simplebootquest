---
slug: "sql-movies-avg"
title: "SQL: Average rating per genre"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average rating per genre

Return `genre` and `avg_rating` (the average `rating` rounded to 1 decimal place) per `genre`, ordered by `genre`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
