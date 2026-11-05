---
slug: "sql-p-cancel-stale"
title: "Practice: Updating with a Condition"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
hints: ["ISO date strings compare correctly as text: `created_at < '2026-02-10'`."]
---
# Practice: Updating with a Condition

Write queries change data, so they deserve the most care. Before running an `UPDATE`, write the matching `SELECT` first and check which rows it would touch. And never forget the `WHERE`!

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
Write an `UPDATE` that sets `status = 'cancelled'` on every **pending** order created **before `2026-02-10`**. Nothing else should change. (The tests query the table afterwards.)
