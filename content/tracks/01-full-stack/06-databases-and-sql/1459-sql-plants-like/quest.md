---
slug: "sql-plants-like"
title: "SQL: Search plants by name"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Search plants by name

Return the `name`s that contain "as" (case-insensitive in SQLite's `LIKE` for ASCII), ordered alphabetically.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
