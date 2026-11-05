---
slug: "sql-cities-avg"
title: "SQL: Average average temperature per continent"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average average temperature per continent

Return `continent` and `avg_avg_temp` (the average `avg_temp` rounded to 1 decimal place) per `continent`, ordered by `continent`.

Tables: `cities` and `city_events` (open the setup to see the data). Column names in SQL are snake_case.
