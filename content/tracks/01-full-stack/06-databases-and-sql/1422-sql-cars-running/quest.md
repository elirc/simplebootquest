---
slug: "sql-cars-running"
title: "SQL: Running total of price (thousands)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Running total of price (thousands)

Return `id`, `price_k` and `running_total`: the cumulative sum of `price_k` ordered by `id`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
