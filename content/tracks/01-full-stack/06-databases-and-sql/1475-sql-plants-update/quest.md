---
slug: "sql-plants-update"
title: "SQL: Update plants in one light needs"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update plants in one light needs

Write an `UPDATE` that adds 10 to `water_every_days` for every plant whose `light` is 'bright'. Nothing else may change.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
