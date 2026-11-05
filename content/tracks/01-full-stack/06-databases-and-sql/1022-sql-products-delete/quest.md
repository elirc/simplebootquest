---
slug: "sql-products-delete"
title: "SQL: Delete products below a stock"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Delete products below a stock

Delete every product whose `stock` is below 5 **and** that has no rows in `product_events` (never delete rows other tables reference).

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
