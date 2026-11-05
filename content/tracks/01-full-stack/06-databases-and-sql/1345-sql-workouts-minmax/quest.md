---
slug: "sql-workouts-minmax"
title: "SQL: Range of duration (minutes) per kind"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Range of duration (minutes) per kind

Return `kind`, `min_minutes` and `max_minutes` per `kind`, ordered by `kind`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
