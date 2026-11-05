---
slug: "sql-workouts-not-exists"
title: "SQL: Workouts with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Workouts with no events

Return the `label`s of workouts that have **no** rows in `workout_events`, ordered by `label`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
