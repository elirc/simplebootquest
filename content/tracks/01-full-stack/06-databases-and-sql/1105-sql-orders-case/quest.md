---
slug: "sql-orders-case"
title: "SQL: Label orders by total (in cents)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label orders by total (in cents)

Return `code` and `band`: `'high'` when `total_cents` ≥ 13501, `'low'` when it's below 4387, otherwise `'medium'`. Order by `code`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
