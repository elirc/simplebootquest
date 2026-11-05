---
slug: "sql-songs-delete"
title: "SQL: Delete songs below a length in seconds"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Delete songs below a length in seconds

Delete every song whose `seconds` is below 267 **and** that has no rows in `song_events` (never delete rows other tables reference).

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
