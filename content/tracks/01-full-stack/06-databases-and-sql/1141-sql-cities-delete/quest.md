---
slug: "sql-cities-delete"
title: "SQL: Delete cities below a average temperature"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Delete cities below a average temperature

Delete every city whose `avg_temp` is below 11 **and** that has no rows in `city_events` (never delete rows other tables reference).

Tables: `cities` and `city_events` (open the setup to see the data). Column names in SQL are snake_case.
