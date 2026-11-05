---
slug: "sql-songs-top"
title: "SQL: Top 3 songs by length in seconds"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 songs by length in seconds

Return the `title` and `seconds` of the 3 songs with the highest `seconds`. Break ties by `title`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
