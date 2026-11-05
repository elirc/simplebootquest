---
slug: "sql-products-above-avg"
title: "SQL: Products above the average stock"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Products above the average stock

Return the `name`s of products whose `stock` is above the overall average, ordered by `name`. Use a subquery.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
