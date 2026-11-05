---
slug: "sql-plants-between"
title: "SQL: Plants in a watering interval (days) range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Plants in a watering interval (days) range

Return the `name`s of plants with `water_every_days` between 6 and 15 (inclusive), ordered by `water_every_days`, then `name`.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
