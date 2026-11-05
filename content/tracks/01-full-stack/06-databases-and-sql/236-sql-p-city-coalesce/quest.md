---
slug: "sql-p-city-coalesce"
title: "Practice: Grouping with Missing Values"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
---
# Practice: Grouping with Missing Values

`GROUP BY city` puts all the NULL cities into one group, whose label is NULL. That's confusing in a report. `COALESCE(city, 'Unknown')` substitutes a label.

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
Return `city` (with `'Unknown'` for NULL) and `customers` (the count), ordered by count descending, then city.
