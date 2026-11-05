---
slug: "sql-products-rank"
title: "SQL: Rank products within each category"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank products within each category

Return `category`, `name`, `stock` and `rank`: the `RANK()` by `stock` (highest first) **within each** `category`. Order by `category`, `rank`, `name`.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
