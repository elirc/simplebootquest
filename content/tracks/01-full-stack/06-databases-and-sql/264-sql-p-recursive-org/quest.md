---
slug: "sql-p-recursive-org"
title: "Practice: Recursive CTEs"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
resources: [{"title": "SQLite: Recursive common table expressions", "url": "https://www.sqlite.org/lang_with.html#recursive_common_table_expressions"}]
---
# Practice: Recursive CTEs

"Everyone under Dev, at any depth" can't be done with a fixed number of joins, because you don't know how deep the tree goes. A **recursive CTE** walks it:

```sql
WITH RECURSIVE chain(id, depth) AS (
  SELECT id, 0 FROM employees WHERE id = 2      -- anchor: the starting row
  UNION ALL
  SELECT e.id, c.depth + 1                       -- step: children of the rows found so far
  FROM employees e JOIN chain c ON e.manager_id = c.id
)
SELECT * FROM chain;
```

The same pattern handles comment threads, folder trees and category hierarchies.

This quest uses an `employees` table where `manager_id` points to another row in the **same table**.

## Your task
Return everyone who reports to **Dev** (id 2), directly or indirectly, with `name` and `depth` (1 for direct reports, 2 for their reports, and so on). Don't include Dev. Order by depth, then name.
