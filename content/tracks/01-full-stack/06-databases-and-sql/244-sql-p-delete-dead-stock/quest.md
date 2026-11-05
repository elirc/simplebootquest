---
slug: "sql-p-delete-dead-stock"
title: "Practice: Deleting Safely"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
hints: ["Inside the subquery, refer to the outer row as `products.id`."]
---
# Practice: Deleting Safely

Deleting a product that appears in old orders would break those orders (or fail on the foreign key). Only delete rows that **nothing references**.

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
Delete every product that has **zero stock and has never been ordered**. The tests check which products remain.
