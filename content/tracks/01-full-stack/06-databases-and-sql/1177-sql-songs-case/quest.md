---
slug: "sql-songs-case"
title: "SQL: Label songs by length in seconds"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label songs by length in seconds

Return `title` and `band`: `'high'` when `seconds` ≥ 393, `'low'` when it's below 267, otherwise `'medium'`. Order by `title`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
