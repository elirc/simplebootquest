---
slug: "sql-workouts-between"
title: "SQL: Workouts in a duration (minutes) range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Workouts in a duration (minutes) range

Return the `label`s of workouts with `minutes` between 25 and 98 (inclusive), ordered by `minutes`, then `label`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
