---
slug: "sql-products-count"
title: "SQL: Count products per category"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count products per category

Return `category` and `total` (the number of products) for each `category`, ordered by `total` descending, then `category`.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
