---
slug: "sql-p-status-pivot"
title: "Practice: Pivoting with Conditional Aggregation"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
hints: ["With a LEFT JOIN, customers without orders have `o.status` NULL, so every CASE gives 0 for them, which is what you want."]
---
# Practice: Pivoting with Conditional Aggregation

Dashboards often want statuses as **columns**, not rows:

| name | pending | paid | shipped | cancelled |
|------|---------|------|---------|-----------|

SQL has no built-in `PIVOT` in SQLite or PostgreSQL, but **conditional aggregation** does the job: one `SUM(CASE ...)` per column.

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
For every customer (including those with no orders), return `name`, `pending`, `paid`, `shipped` and `cancelled` order counts. Order by name.
