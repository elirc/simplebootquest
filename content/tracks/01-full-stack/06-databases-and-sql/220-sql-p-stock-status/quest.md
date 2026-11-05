---
slug: "sql-p-stock-status"
title: "Practice: Stock Status Labels"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
---
# Practice: Stock Status Labels

`CASE` turns values into labels inside a query, which keeps the logic in one place:

```sql
CASE WHEN stock = 0 THEN 'out' WHEN stock < 5 THEN 'low' ELSE 'ok' END
```

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
Return `sku`, `name`, `stock` and `status` (`'out'` for 0, `'low'` for 1–4, `'ok'` otherwise) for every product that is **not** `'ok'`. Order out-of-stock first, then by stock ascending, then by sku.
