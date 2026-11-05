---
slug: "sql-workouts-top"
title: "SQL: Top 3 workouts by duration (minutes)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 workouts by duration (minutes)

Return the `label` and `minutes` of the 3 workouts with the highest `minutes`. Break ties by `label`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
