---
slug: "sql-p-upsert-restock"
title: "Practice: Restocking with an Upsert"
type: "code"
language: "sql"
xp: 20
---
# Practice: Restocking with an Upsert

A supplier sends a restock file. Some SKUs already exist (add to their stock), others are new (insert them). An **upsert** does both in one statement:

```sql
INSERT INTO products (sku, ...) VALUES (...)
ON CONFLICT (sku) DO UPDATE SET stock = products.stock + excluded.stock;
```

`excluded` refers to the row you tried to insert. This syntax works in both SQLite and PostgreSQL.

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
Apply this restock in a **single** `INSERT ... ON CONFLICT` statement:

| sku | name | category | price_cents | stock |
|-----|------|----------|-------------|-------|
| MN-24 | 24" Monitor | displays | 15900 | 10 |
| HB-07 | 7-Port Hub | accessories | 3400 | 6 |
| WC-01 | Webcam | peripherals | 5900 | 20 |

Existing SKUs keep their name and price, and only get the stock **added**.
