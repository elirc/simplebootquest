---
slug: "sql-songs-in"
title: "SQL: Songs in some artists"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Songs in some artists

Return `id` and `title` of songs whose `artist` is 'Kairo' or 'Nova', ordered by `id`. Use `IN`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
