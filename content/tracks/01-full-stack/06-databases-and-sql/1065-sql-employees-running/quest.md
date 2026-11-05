---
slug: "sql-employees-running"
title: "SQL: Running total of years at the company"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Running total of years at the company

Return `id`, `years_at_company` and `running_total`: the cumulative sum of `years_at_company` ordered by `id`.

Tables: `employees` and `employee_events` (open the setup to see the data). Column names in SQL are snake_case.
