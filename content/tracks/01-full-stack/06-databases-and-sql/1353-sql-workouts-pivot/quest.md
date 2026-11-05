---
slug: "sql-workouts-pivot"
title: "SQL: Event kinds per workout"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Event kinds per workout

For every workout that has events, return `label`, `views`, `likes` and `shares` (event counts per kind), ordered by `label`. Use conditional aggregation (`SUM(CASE …)`).

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
