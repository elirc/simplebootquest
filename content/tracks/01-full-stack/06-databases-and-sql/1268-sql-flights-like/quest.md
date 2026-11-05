---
slug: "sql-flights-like"
title: "SQL: Search flights by number"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Search flights by number

Return the `number`s that contain "f1" (case-insensitive in SQLite's `LIKE` for ASCII), ordered alphabetically.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
