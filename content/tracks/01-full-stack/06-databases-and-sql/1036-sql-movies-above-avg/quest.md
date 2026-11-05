---
slug: "sql-movies-above-avg"
title: "SQL: Movies above the average rating"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Movies above the average rating

Return the `title`s of movies whose `rating` is above the overall average, ordered by `title`. Use a subquery.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
