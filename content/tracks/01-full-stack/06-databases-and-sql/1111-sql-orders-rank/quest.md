---
slug: "sql-orders-rank"
title: "SQL: Rank orders within each status"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank orders within each status

Return `status`, `code`, `total_cents` and `rank`: the `RANK()` by `total_cents` (highest first) **within each** `status`. Order by `status`, `rank`, `code`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
