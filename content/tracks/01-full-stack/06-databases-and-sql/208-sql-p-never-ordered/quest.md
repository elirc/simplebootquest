---
slug: "sql-p-never-ordered"
title: "Practice: Customers Who Never Ordered"
type: "code"
language: "sql"
xp: 20
---
# Practice: Customers Who Never Ordered

Marketing wants to email everyone who signed up but never bought anything. There are two classic ways to find rows with **no match** in another table:

```sql
-- 1. LEFT JOIN and keep the rows where the join found nothing
SELECT ... FROM a LEFT JOIN b ON b.a_id = a.id WHERE b.id IS NULL;
-- 2. NOT EXISTS
SELECT ... FROM a WHERE NOT EXISTS (SELECT 1 FROM b WHERE b.a_id = a.id);
```

Avoid `NOT IN (SELECT a_id FROM b)` when `a_id` can be NULL: one NULL makes the whole condition unknown, and you get **no rows at all**.

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
Return `name` and `email` of customers with no orders at all, ordered by name.
