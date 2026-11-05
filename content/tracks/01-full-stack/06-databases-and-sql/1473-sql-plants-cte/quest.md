---
slug: "sql-plants-cte"
title: "SQL: Light needss above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Light needss above the overall average

Using a CTE, compute the average `water_every_days` per `light`, then return the `light`s whose average is above the overall average of `water_every_days`, ordered by `light`.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
