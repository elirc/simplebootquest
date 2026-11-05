---
slug: "sql-cities-pivot"
title: "SQL: Event kinds per city"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Event kinds per city

For every city that has events, return `name`, `views`, `likes` and `shares` (event counts per kind), ordered by `name`. Use conditional aggregation (`SUM(CASE …)`).

Tables: `cities` and `city_events` (open the setup to see the data). Column names in SQL are snake_case.
