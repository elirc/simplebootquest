---
slug: "sql-products-join-sum"
title: "SQL: Total event amount per product"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Total event amount per product

Join `products` with `product_events` and return `name` and `total` (the sum of `amount`) for products that have events, ordered by `total` descending, then `name`.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
