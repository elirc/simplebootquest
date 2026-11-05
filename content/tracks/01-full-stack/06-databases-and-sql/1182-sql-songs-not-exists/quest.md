---
slug: "sql-songs-not-exists"
title: "SQL: Songs with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Songs with no events

Return the `title`s of songs that have **no** rows in `song_events`, ordered by `title`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
