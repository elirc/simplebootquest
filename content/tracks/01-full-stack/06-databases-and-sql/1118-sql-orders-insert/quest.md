---
slug: "sql-orders-insert"
title: "SQL: Insert a new order"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new order

Insert a order with id 100, `code` 'New order', `total_cents` 9244, `items` 1, `status` 'cancelled', `country` 'UK'. Then return how many orders have that `status` as `total`.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
