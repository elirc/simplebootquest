---
slug: "sql-songs-update"
title: "SQL: Update songs in one artist"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update songs in one artist

Write an `UPDATE` that adds 10 to `seconds` for every song whose `artist` is 'Kairo'. Nothing else may change.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
