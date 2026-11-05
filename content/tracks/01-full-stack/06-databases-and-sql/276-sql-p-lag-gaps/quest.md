---
slug: "sql-p-lag-gaps"
title: "Practice: Comparing with the Previous Row"
type: "code"
language: "sql"
xp: 20
---
# Practice: Comparing with the Previous Row

`LAG(column)` reads the value from the **previous row** in the window, and `LEAD` reads the next one. They're perfect for "time since the last event", "change since yesterday" and streaks.

```sql
year - LAG(year) OVER (PARTITION BY author_id ORDER BY year) AS gap
```

The first row in each partition has no previous row, so `LAG` returns NULL.

This quest uses the **library** database: `authors`, `books`, `members` and `loans`.

## Your task
For every book, return `author`, `title`, `year` and `gap`: the years since that author's **previous** book (NULL for their first). Order by author name, then year.
