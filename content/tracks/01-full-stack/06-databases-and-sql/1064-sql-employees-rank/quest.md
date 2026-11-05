---
slug: "sql-employees-rank"
title: "SQL: Rank employees within each level"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank employees within each level

Return `level`, `name`, `years_at_company` and `rank`: the `RANK()` by `years_at_company` (highest first) **within each** `level`. Order by `level`, `rank`, `name`.

Tables: `employees` and `employee_events` (open the setup to see the data). Column names in SQL are snake_case.
