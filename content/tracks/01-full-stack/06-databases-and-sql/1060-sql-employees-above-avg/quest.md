---
slug: "sql-employees-above-avg"
title: "SQL: Employees above the average years at the company"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Employees above the average years at the company

Return the `name`s of employees whose `years_at_company` is above the overall average, ordered by `name`. Use a subquery.

Tables: `employees` and `employee_events` (open the setup to see the data). Column names in SQL are snake_case.
