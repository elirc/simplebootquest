---
slug: "sql-plants-top"
title: "SQL: Top 3 plants by watering interval (days)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 plants by watering interval (days)

Return the `name` and `water_every_days` of the 3 plants with the highest `water_every_days`. Break ties by `name`.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
