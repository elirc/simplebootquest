---
slug: "sql-workouts-count"
title: "SQL: Count workouts per kind"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count workouts per kind

Return `kind` and `total` (the number of workouts) for each `kind`, ordered by `total` descending, then `kind`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
