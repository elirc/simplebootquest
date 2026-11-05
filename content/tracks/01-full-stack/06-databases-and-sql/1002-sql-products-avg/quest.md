---
slug: "sql-products-avg"
title: "SQL: Average stock per category"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average stock per category

Return `category` and `avg_stock` (the average `stock` rounded to 1 decimal place) per `category`, ordered by `category`.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
