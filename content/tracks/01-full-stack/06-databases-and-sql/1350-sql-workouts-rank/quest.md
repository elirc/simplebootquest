---
slug: "sql-workouts-rank"
title: "SQL: Rank workouts within each kind"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank workouts within each kind

Return `kind`, `label`, `minutes` and `rank`: the `RANK()` by `minutes` (highest first) **within each** `kind`. Order by `kind`, `rank`, `label`.

Tables: `workouts` and `workout_events` (open the setup to see the data). Column names in SQL are snake_case.
