---
slug: "sql-plants-running"
title: "SQL: Running total of watering interval (days)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Running total of watering interval (days)

Return `id`, `water_every_days` and `running_total`: the cumulative sum of `water_every_days` ordered by `id`.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
