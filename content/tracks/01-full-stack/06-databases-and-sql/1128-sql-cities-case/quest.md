---
slug: "sql-cities-case"
title: "SQL: Label cities by average temperature"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label cities by average temperature

Return `name` and `band`: `'high'` when `avg_temp` ≥ 20, `'low'` when it's below 11, otherwise `'medium'`. Order by `name`.

Tables: `cities` and `city_events` (open the setup to see the data). Column names in SQL are snake_case.
