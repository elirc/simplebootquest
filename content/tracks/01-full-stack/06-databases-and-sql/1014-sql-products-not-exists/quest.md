---
slug: "sql-products-not-exists"
title: "SQL: Products with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Products with no events

Return the `name`s of products that have **no** rows in `product_events`, ordered by `name`.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
