---
slug: "sql-orders-join-sum"
title: "SQL: Total event amount per order"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Total event amount per order

Join `orders` with `order_events` and return `code` and `total` (the sum of `amount`) for orders that have events, ordered by `total` descending, then `code`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
