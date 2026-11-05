---
slug: "sql-cars-minmax"
title: "SQL: Range of price (thousands) per fuel type"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Range of price (thousands) per fuel type

Return `fuel`, `min_price_k` and `max_price_k` per `fuel`, ordered by `fuel`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
