---
slug: "sql-orders-between"
title: "SQL: Orders in a total (in cents) range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Orders in a total (in cents) range

Return the `code`s of orders with `total_cents` between 4387 and 13501 (inclusive), ordered by `total_cents`, then `code`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
