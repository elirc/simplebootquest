---
slug: "sql-flights-case"
title: "SQL: Label flights by duration (minutes)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label flights by duration (minutes)

Return `number` and `band`: `'high'` when `duration_min` ≥ 542, `'low'` when it's below 263, otherwise `'medium'`. Order by `number`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
