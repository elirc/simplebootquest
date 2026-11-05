---
slug: "sql-songs-left-join"
title: "SQL: Event counts including zeros"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Event counts including zeros

Return `title` and `events` (how many rows in `song_events`) for **every** song, including those with none. Order by `events` descending, then `title`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
