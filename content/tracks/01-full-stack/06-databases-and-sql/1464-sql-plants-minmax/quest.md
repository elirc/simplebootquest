---
slug: "sql-plants-minmax"
title: "SQL: Range of watering interval (days) per light needs"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Range of watering interval (days) per light needs

Return `light`, `min_water_every_days` and `max_water_every_days` per `light`, ordered by `light`.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
