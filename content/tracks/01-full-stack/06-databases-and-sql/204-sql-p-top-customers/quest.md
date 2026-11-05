---
slug: "sql-p-top-customers"
title: "Practice: Big Spenders"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
hints: ["`WHERE` filters rows before grouping (use it for the status). `HAVING` filters groups after (use it for the total)."]
---
# Practice: Big Spenders

"Who are our best customers?" is a typical business question, and it hides a trap: **cancelled and pending orders aren't revenue**.

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
Return `name` and `spent_cents` for customers whose `paid` or `shipped` orders add up to **at least 30000 cents** ($300). Order by `spent_cents` descending.
