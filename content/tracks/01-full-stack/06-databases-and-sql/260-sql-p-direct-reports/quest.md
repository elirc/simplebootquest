---
slug: "sql-p-direct-reports"
title: "Practice: Counting Direct Reports"
type: "code"
language: "sql"
xp: 20
---
# Practice: Counting Direct Reports

This quest uses an `employees` table where `manager_id` points to another row in the **same table**.

## Your task
Return `name` and `reports` (the number of **direct** reports) for every employee who manages at least one person. Order by `reports` descending, then name.
