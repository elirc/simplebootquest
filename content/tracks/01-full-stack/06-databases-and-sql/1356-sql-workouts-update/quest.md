---
slug: "sql-workouts-update"
title: "SQL: Update workouts in one kind"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update workouts in one kind

Write an `UPDATE` that adds 10 to `minutes` for every workout whose `kind` is 'cardio'. Nothing else may change.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
