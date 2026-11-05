---
slug: "sql-p-best-sellers"
title: "Practice: Best-Selling Products"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
hints: ["Units sold is `SUM(quantity)`, not `COUNT(*)`: one line item can contain 10 cables."]
---
# Practice: Best-Selling Products

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
Return the **top 3** products by units sold (`units`), counting only orders that weren't cancelled. Include `name` and `units`. Break ties by product name, A to Z.
