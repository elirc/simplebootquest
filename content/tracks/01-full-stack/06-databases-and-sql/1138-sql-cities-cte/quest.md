---
slug: "sql-cities-cte"
title: "SQL: Continents above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Continents above the overall average

Using a CTE, compute the average `avg_temp` per `continent`, then return the `continent`s whose average is above the overall average of `avg_temp`, ordered by `continent`.

Tables: `cities` and `city_events` (open the setup to see the data). Column names in SQL are snake_case.
