---
slug: "sql-orders-running"
title: "SQL: Running total of total (in cents)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Running total of total (in cents)

Return `id`, `total_cents` and `running_total`: the cumulative sum of `total_cents` ordered by `id`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
