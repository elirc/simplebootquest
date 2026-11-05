---
slug: "sql-orders-where"
title: "SQL: Orders with total (in cents) above 9244"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Orders with total (in cents) above 9244

Return the `code` and `total_cents` of orders whose `total_cents` is greater than 9244, ordered by `total_cents` descending, then `code`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
