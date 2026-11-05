---
slug: "sql-cities-rank"
title: "SQL: Rank cities within each continent"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank cities within each continent

Return `continent`, `name`, `avg_temp` and `rank`: the `RANK()` by `avg_temp` (highest first) **within each** `continent`. Order by `continent`, `rank`, `name`.

Tables: `cities` and `city_events` (open the setup to see the data). Column names in SQL are snake_case.
