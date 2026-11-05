---
slug: "sql-songs-where"
title: "SQL: Songs with length in seconds above 351"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Songs with length in seconds above 351

Return the `title` and `seconds` of songs whose `seconds` is greater than 351, ordered by `seconds` descending, then `title`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
