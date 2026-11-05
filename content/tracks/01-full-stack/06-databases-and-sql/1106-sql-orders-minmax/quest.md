---
slug: "sql-orders-minmax"
title: "SQL: Range of total (in cents) per status"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Range of total (in cents) per status

Return `status`, `min_total_cents` and `max_total_cents` per `status`, ordered by `status`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
