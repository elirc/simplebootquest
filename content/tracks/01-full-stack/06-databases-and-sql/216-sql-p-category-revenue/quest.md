---
slug: "sql-p-category-revenue"
title: "Practice: Revenue by Category"
type: "code"
language: "sql"
xp: 20
hints: ["`COUNT(DISTINCT oi.order_id)` counts each order once, even if it has several items from the same category."]
---
# Practice: Revenue by Category

Money is stored in **integer cents** to avoid floating-point rounding errors (`0.1 + 0.2 !== 0.3`). Convert to dollars only for display, and divide by `100.0` (not `100`), or integer division throws away the cents.

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
For `paid` and `shipped` orders, return each `category` with `revenue` in **dollars**, rounded to 2 decimal places, and `orders`: the number of **distinct** orders that included that category. Order by revenue descending. Categories with no sales aren't listed.
