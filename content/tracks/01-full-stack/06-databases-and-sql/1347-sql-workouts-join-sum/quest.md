---
slug: "sql-workouts-join-sum"
title: "SQL: Total event amount per workout"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Total event amount per workout

Join `workouts` with `workout_events` and return `label` and `total` (the sum of `amount`) for workouts that have events, ordered by `total` descending, then `label`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
