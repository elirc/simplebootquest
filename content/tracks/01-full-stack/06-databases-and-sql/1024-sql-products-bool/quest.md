---
slug: "sql-products-bool"
title: "SQL: Count on sale products"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count on sale products

Booleans are stored as 0/1 in SQLite. Return `category` and `total` (how many products have `on_sale` = 1) per `category`, including groups with zero, ordered by `category`.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
