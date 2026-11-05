---
slug: "sql-workouts-avg"
title: "SQL: Average duration (minutes) per kind"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average duration (minutes) per kind

Return `kind` and `avg_minutes` (the average `minutes` rounded to 1 decimal place) per `kind`, ordered by `kind`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
