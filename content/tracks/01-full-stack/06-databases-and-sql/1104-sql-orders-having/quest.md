---
slug: "sql-orders-having"
title: "SQL: Statuss with several orders"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Statuss with several orders

Return `status` and `total` for groups that have **at least 2** orders, ordered by `status`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
