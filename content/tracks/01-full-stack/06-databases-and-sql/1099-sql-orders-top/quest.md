---
slug: "sql-orders-top"
title: "SQL: Top 3 orders by total (in cents)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 orders by total (in cents)

Return the `code` and `total_cents` of the 3 orders with the highest `total_cents`. Break ties by `code`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
