---
slug: "sql-workouts-insert"
title: "SQL: Insert a new workout"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new workout

Insert a workout with id 100, `label` 'New workout', `minutes` 72, `calories` 80, `kind` 'cardio'. Then return how many workouts have that `kind` as `total`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
