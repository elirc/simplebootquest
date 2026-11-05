---
slug: "sql-cities-where"
title: "SQL: Cities with average temperature above 14"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Cities with average temperature above 14

Return the `name` and `avg_temp` of cities whose `avg_temp` is greater than 14, ordered by `avg_temp` descending, then `name`.

Tables: `cities` and `city_events` (open the setup to see the data). Column names in SQL are snake_case.
