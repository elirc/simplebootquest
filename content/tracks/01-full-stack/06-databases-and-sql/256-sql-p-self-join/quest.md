---
slug: "sql-p-self-join"
title: "Practice: Self-Joins"
type: "code"
language: "sql"
xp: 20
---
# Practice: Self-Joins

To pair each employee with their manager, join the table **to itself** with two aliases:

```sql
SELECT e.name, m.name AS manager
FROM employees e
LEFT JOIN employees m ON m.id = e.manager_id;
```

Use `LEFT JOIN` so the CEO (with no manager) still appears.

This quest uses an `employees` table where `manager_id` points to another row in the **same table**.

## Your task
Return `name`, `title` and `manager` (the manager's name, or NULL) for every employee, ordered by `id`.
