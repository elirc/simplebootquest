---
slug: "sql-cars-above-avg"
title: "SQL: Cars above the average price (thousands)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Cars above the average price (thousands)

Return the `model`s of cars whose `price_k` is above the overall average, ordered by `model`. Use a subquery.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
