---
slug: "sql-orders-page"
title: "SQL: Page 2 of orders"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Page 2 of orders

Return the `id` and `code` of the **second page** of orders sorted by `code`, with 3 per page.

Tables: `orders` and `order_events` (open the setup to see the data). Column names in SQL are snake_case.
