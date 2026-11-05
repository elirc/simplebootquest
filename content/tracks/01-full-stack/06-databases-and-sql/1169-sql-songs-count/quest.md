---
slug: "sql-songs-count"
title: "SQL: Count songs per artist"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count songs per artist

Return `artist` and `total` (the number of songs) for each `artist`, ordered by `total` descending, then `artist`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
