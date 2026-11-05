---
slug: "sql-flights-top"
title: "SQL: Top 3 flights by duration (minutes)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 flights by duration (minutes)

Return the `number` and `duration_min` of the 3 flights with the highest `duration_min`. Break ties by `number`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
