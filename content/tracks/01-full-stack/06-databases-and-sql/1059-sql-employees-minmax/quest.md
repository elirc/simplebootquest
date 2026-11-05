---
slug: "sql-employees-minmax"
title: "SQL: Range of years at the company per level"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Range of years at the company per level

Return `level`, `min_years_at_company` and `max_years_at_company` per `level`, ordered by `level`.

Tables: `employees` and `employee_events` (open the setup to see the data). Column names in SQL are snake_case.
