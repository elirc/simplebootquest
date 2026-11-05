---
slug: "sql-products-case"
title: "SQL: Label products by stock"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label products by stock

Return `name` and `band`: `'high'` when `stock` ≥ 29, `'low'` when it's below 5, otherwise `'medium'`. Order by `name`.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
