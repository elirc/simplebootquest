---
slug: "sql-products-running"
title: "SQL: Running total of stock"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Running total of stock

Return `id`, `stock` and `running_total`: the cumulative sum of `stock` ordered by `id`.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
