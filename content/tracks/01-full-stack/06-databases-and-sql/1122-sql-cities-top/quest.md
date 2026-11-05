---
slug: "sql-cities-top"
title: "SQL: Top 3 cities by average temperature"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 cities by average temperature

Return the `name` and `avg_temp` of the 3 cities with the highest `avg_temp`. Break ties by `name`.

Tables: `cities` and `city_events` (open the setup to see the data). Column names in SQL are snake_case.
