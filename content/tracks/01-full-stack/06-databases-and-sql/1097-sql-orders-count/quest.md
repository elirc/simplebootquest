---
slug: "sql-orders-count"
title: "SQL: Count orders per status"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count orders per status

Return `status` and `total` (the number of orders) for each `status`, ordered by `total` descending, then `status`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
