---
slug: "sql-p-top-per-group"
title: "Practice: Top N per Group"
type: "code"
language: "sql"
xp: 20
hints: ["The starter looks right but isn't portable: SQLite happens to return the title from the max row, while PostgreSQL rejects it. Use ROW_NUMBER."]
---
# Practice: Top N per Group

"The longest book by each author" is the **top-N-per-group** problem. A plain `GROUP BY` can find the max page count, but not the matching title. The standard answer is to number the rows within each group and keep number 1:

```sql
WITH ranked AS (
  SELECT ..., ROW_NUMBER() OVER (PARTITION BY author_id ORDER BY pages DESC) AS rn
  FROM books
)
SELECT ... FROM ranked WHERE rn = 1;
```

This quest uses the **library** database: `authors`, `books`, `members` and `loans`.

## Your task
Return `author`, `title` and `pages` of each author's **longest** book, ordered by author name.
