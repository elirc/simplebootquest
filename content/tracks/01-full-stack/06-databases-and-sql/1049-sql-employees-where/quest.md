---
slug: "sql-employees-where"
title: "SQL: Employees with years at the company above 13"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Employees with years at the company above 13

Return the `name` and `years_at_company` of employees whose `years_at_company` is greater than 13, ordered by `years_at_company` descending, then `name`.

Tables: `employees` and `employee_events` (open the setup to see the data). Column names in SQL are snake_case.
