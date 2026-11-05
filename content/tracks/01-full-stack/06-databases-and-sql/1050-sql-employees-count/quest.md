---
slug: "sql-employees-count"
title: "SQL: Count employees per level"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count employees per level

Return `level` and `total` (the number of employees) for each `level`, ordered by `total` descending, then `level`.

Tables: `employees` and `employee_events` (open the setup to see the data). Column names in SQL are snake_case.
