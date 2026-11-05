---
slug: "sql-cars-pivot"
title: "SQL: Event kinds per car"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Event kinds per car

For every car that has events, return `model`, `views`, `likes` and `shares` (event counts per kind), ordered by `model`. Use conditional aggregation (`SUM(CASE …)`).

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
