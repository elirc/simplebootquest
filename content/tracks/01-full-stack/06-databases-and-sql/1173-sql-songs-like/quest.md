---
slug: "sql-songs-like"
title: "SQL: Search songs by title"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Search songs by title

Return the `title`s that contain "ch" (case-insensitive in SQLite's `LIKE` for ASCII), ordered alphabetically.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
