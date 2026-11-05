---
slug: "sql-plants-delete"
title: "SQL: Delete plants below a watering interval (days)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Delete plants below a watering interval (days)

Delete every plant whose `water_every_days` is below 6 **and** that has no rows in `plant_events` (never delete rows other tables reference).

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
