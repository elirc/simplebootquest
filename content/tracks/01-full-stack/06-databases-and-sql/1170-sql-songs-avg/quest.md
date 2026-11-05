---
slug: "sql-songs-avg"
title: "SQL: Average length in seconds per artist"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average length in seconds per artist

Return `artist` and `avg_seconds` (the average `seconds` rounded to 1 decimal place) per `artist`, ordered by `artist`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
