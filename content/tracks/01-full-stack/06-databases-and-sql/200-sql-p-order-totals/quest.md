---
slug: "sql-p-order-totals"
title: "Practice: Order Totals"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
hints: ["Join all three tables, then `GROUP BY o.id`.", "You can do arithmetic inside an aggregate: `SUM(oi.quantity * oi.unit_price_cents)`."]
---
# Practice: Order Totals

Prices change, so a well-designed shop stores the price **paid** on each line item (`unit_price_cents`) instead of looking up today's product price. An order's total is the sum over its items.

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
Return one row per order with `order_id`, `customer` (the customer's name), `items` (the total quantity) and `total_cents` (the sum of `quantity * unit_price_cents`). Order by `total_cents` descending, then `order_id`.
