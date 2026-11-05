---
slug: "sql-workouts-case"
title: "SQL: Label workouts by duration (minutes)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label workouts by duration (minutes)

Return `label` and `band`: `'high'` when `minutes` ≥ 98, `'low'` when it's below 25, otherwise `'medium'`. Order by `label`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
