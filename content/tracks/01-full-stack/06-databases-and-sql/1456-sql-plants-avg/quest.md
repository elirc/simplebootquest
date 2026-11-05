---
slug: "sql-plants-avg"
title: "SQL: Average watering interval (days) per light needs"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average watering interval (days) per light needs

Return `light` and `avg_water_every_days` (the average `water_every_days` rounded to 1 decimal place) per `light`, ordered by `light`.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
