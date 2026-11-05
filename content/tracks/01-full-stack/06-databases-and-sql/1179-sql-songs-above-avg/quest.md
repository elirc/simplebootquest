---
slug: "sql-songs-above-avg"
title: "SQL: Songs above the average length in seconds"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Songs above the average length in seconds

Return the `title`s of songs whose `seconds` is above the overall average, ordered by `title`. Use a subquery.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
