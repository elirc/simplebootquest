---
slug: "sql-p-rank-in-department"
title: "Practice: Ranking Within Groups"
type: "code"
language: "sql"
xp: 20
---
# Practice: Ranking Within Groups

`RANK()`, `DENSE_RANK()` and `ROW_NUMBER()` number rows **within a partition**:

| salary | ROW_NUMBER | RANK | DENSE_RANK |
|--------|-----------|------|------------|
| 150 | 1 | 1 | 1 |
| 120 | 2 | 2 | 2 |
| 120 | 3 | 2 | 2 |
| 100 | 4 | 4 | 3 |

`RANK` leaves gaps after ties, and `DENSE_RANK` doesn't.

This quest uses an `employees` table where `manager_id` points to another row in the **same table**.

## Your task
Return `department`, `name`, `salary` and `salary_rank` (a **dense** rank by salary, highest first, **within each department**) for every employee. Order by department, then rank, then name.
