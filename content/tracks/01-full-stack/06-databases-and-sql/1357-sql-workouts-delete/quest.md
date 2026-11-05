---
slug: "sql-workouts-delete"
title: "SQL: Delete workouts below a duration (minutes)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Delete workouts below a duration (minutes)

Delete every workout whose `minutes` is below 25 **and** that has no rows in `workout_events` (never delete rows other tables reference).

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
