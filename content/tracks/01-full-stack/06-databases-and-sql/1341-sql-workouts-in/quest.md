---
slug: "sql-workouts-in"
title: "SQL: Workouts in some kinds"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Workouts in some kinds

Return `id` and `label` of workouts whose `kind` is 'cardio' or 'strength', ordered by `id`. Use `IN`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
