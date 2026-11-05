---
slug: "sql-cars-cte"
title: "SQL: Fuel types above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Fuel types above the overall average

Using a CTE, compute the average `price_k` per `fuel`, then return the `fuel`s whose average is above the overall average of `price_k`, ordered by `fuel`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
