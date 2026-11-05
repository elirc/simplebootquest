---
slug: "sql-employees-cte"
title: "SQL: Levels above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Levels above the overall average

Using a CTE, compute the average `years_at_company` per `level`, then return the `level`s whose average is above the overall average of `years_at_company`, ordered by `level`.

Tables: `employees` and `employee_events` (open the setup to see the data). Column names in SQL are snake_case.
