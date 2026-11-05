---
slug: "sql-plants-case"
title: "SQL: Label plants by watering interval (days)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label plants by watering interval (days)

Return `name` and `band`: `'high'` when `water_every_days` ≥ 15, `'low'` when it's below 6, otherwise `'medium'`. Order by `name`.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
