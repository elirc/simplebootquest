---
slug: "sql-products-update"
title: "SQL: Update products in one category"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update products in one category

Write an `UPDATE` that adds 10 to `stock` for every product whose `category` is 'home'. Nothing else may change.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
