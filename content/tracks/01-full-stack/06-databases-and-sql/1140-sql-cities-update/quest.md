---
slug: "sql-cities-update"
title: "SQL: Update cities in one continent"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update cities in one continent

Write an `UPDATE` that adds 10 to `avg_temp` for every city whose `continent` is 'Americas'. Nothing else may change.

Tables: `cities` and `city_events` (open the setup to see the data). Column names in SQL are snake_case.
