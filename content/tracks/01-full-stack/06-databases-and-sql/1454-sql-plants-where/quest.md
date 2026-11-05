---
slug: "sql-plants-where"
title: "SQL: Plants with watering interval (days) above 9"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Plants with watering interval (days) above 9

Return the `name` and `water_every_days` of plants whose `water_every_days` is greater than 9, ordered by `water_every_days` descending, then `name`.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
