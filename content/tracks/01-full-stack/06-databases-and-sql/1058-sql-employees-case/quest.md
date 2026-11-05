---
slug: "sql-employees-case"
title: "SQL: Label employees by years at the company"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label employees by years at the company

Return `name` and `band`: `'high'` when `years_at_company` ≥ 13, `'low'` when it's below 10, otherwise `'medium'`. Order by `name`.

Tables: `employees` and `employee_events` (open the setup to see the data). Column names in SQL are snake_case.
