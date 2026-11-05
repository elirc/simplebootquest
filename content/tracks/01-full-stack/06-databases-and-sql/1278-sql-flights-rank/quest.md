---
slug: "sql-flights-rank"
title: "SQL: Rank flights within each airline group"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank flights within each airline group

Return `airline`, `number`, `duration_min` and `rank`: the `RANK()` by `duration_min` (highest first) **within each** `airline`. Order by `airline`, `rank`, `number`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
