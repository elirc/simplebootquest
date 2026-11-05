---
slug: "sql-workouts-two-cols"
title: "SQL: Sort by two columns"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Sort by two columns

Return `label`, `minutes` and `calories`, ordered by `calories` ascending, then `minutes` descending, then `label`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
