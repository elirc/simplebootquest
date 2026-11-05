---
slug: "sql-songs-between"
title: "SQL: Songs in a length in seconds range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Songs in a length in seconds range

Return the `title`s of songs with `seconds` between 267 and 393 (inclusive), ordered by `seconds`, then `title`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
