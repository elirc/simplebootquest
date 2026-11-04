---
slug: "sql-running-totals"
title: "Running Totals & LAG"
type: "code"
language: "sql"
xp: 25
hints: ["`SUM(amount) OVER (ORDER BY day)` is a running total.", "`amount - LAG(amount) OVER (ORDER BY day)`"]
---
# Running Totals & LAG

Dashboards love running totals and period-over-period changes:

```sql
SELECT day, revenue,
  SUM(revenue) OVER (ORDER BY day) AS cumulative,
  revenue - LAG(revenue) OVER (ORDER BY day) AS change
FROM daily_revenue;
```

`LAG(x)` reads the previous row's value (NULL for the first row). `LEAD(x)` reads the next.

## Your task

The setup creates a `sales (day, amount)` table. Return `day`, `amount`, `cumulative` (running total), and `change` (the difference from the previous day, NULL on the first day), ordered by day.
