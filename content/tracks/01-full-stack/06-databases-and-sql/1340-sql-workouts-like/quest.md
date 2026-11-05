---
slug: "sql-workouts-like"
title: "SQL: Search workouts by label"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Search workouts by label

Return the `label`s that contain "hu" (case-insensitive in SQLite's `LIKE` for ASCII), ordered alphabetically.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
