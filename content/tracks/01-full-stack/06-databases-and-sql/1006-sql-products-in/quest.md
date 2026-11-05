---
slug: "sql-products-in"
title: "SQL: Products in some categorys"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Products in some categorys

Return `id` and `name` of products whose `category` is 'home' or 'office', ordered by `id`. Use `IN`.

Tables: `products` and `product_events` (open the setup to see the data). Column names in SQL are snake_case.
