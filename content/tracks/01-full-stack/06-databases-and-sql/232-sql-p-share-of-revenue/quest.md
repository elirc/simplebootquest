---
slug: "sql-p-share-of-revenue"
title: "Practice: Percent of Total"
type: "code"
language: "sql"
xp: 20
hints: ["Aggregate per category in a CTE first, then apply `SUM(...) OVER ()` to the CTE."]
---
# Practice: Percent of Total

A **window function** with an empty `OVER ()` sees every row of the result. That lets you compare each group to the grand total without a subquery:

```sql
SELECT category, revenue, revenue * 100.0 / SUM(revenue) OVER () AS pct
FROM (...)
```

This quest uses a small **shop** database: `customers`, `products` (prices in **cents**), `orders` (with a `status`) and `order_items` (each with a `quantity` and the `unit_price_cents` paid at the time). Look at the setup SQL to see the data.

## Your task
For `paid` and `shipped` orders, return `category`, `revenue_cents`, and `pct`: that category's share of all such revenue, as a percentage rounded to **1 decimal place**. Order by `revenue_cents` descending.
