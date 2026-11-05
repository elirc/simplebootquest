---
slug: "sql-workouts-above-avg"
title: "SQL: Workouts above the average duration (minutes)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Workouts above the average duration (minutes)

Return the `label`s of workouts whose `minutes` is above the overall average, ordered by `label`. Use a subquery.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
