---
slug: "sql-p-monthly-orders"
title: "Practice: Orders per Month"
type: "code"
language: "sql"
xp: 20
hints: ["\"Count the rows that match a condition\" is `SUM(CASE WHEN ... THEN 1 ELSE 0 END)`."]
---
# Practice: Orders per Month

Dates in SQLite are usually stored as ISO strings (`'2026-01-21'`). `strftime('%Y-%m', created_at)` extracts the month. In PostgreSQL you'd write `date_trunc('month', created_at)` or `to_char(created_at, 'YYYY-MM')`.

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
Return `month` (like `'2026-01'`), `orders` (all orders that month), and `cancelled` (how many of them were cancelled), ordered by month.
