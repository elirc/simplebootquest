---
slug: "sql-p-activity-feed"
title: "Practice: UNION ALL for Activity Feeds"
type: "code"
language: "sql"
xp: 20
---
# Practice: UNION ALL for Activity Feeds

An activity feed mixes different kinds of events. `UNION ALL` stacks the results of several queries with the same columns:

```sql
SELECT 'borrowed' AS event, borrowed_on AS at FROM loans
UNION ALL
SELECT 'returned', returned_on FROM loans WHERE returned_on IS NOT NULL
ORDER BY at;
```

`UNION` (without `ALL`) also removes duplicate rows, which costs a sort and is rarely what you want for events.

This quest uses the **library** database: `authors`, `books`, `members` and `loans`.

## Your task
Build a feed with `at` (the date), `member` (name), `event` (`'borrowed'` or `'returned'`) and `title`, covering every borrow and every return. Order by `at`, then `event`.
