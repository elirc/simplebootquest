---
slug: "sql-orders-cte"
title: "SQL: Statuss above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Statuss above the overall average

Using a CTE, compute the average `total_cents` per `status`, then return the `status`s whose average is above the overall average of `total_cents`, ordered by `status`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
