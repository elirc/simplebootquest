---
slug: "sql-movies-in"
title: "SQL: Movies in some genres"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Movies in some genres

Return `id` and `title` of movies whose `genre` is 'sci-fi' or 'thriller', ordered by `id`. Use `IN`.

Tables: `movies` and `movie_events` (open the setup to see the data). Column names in SQL are snake_case.
