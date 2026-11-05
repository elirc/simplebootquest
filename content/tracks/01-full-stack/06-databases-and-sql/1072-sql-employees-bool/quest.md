---
slug: "sql-employees-bool"
title: "SQL: Count remote employees"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count remote employees

Booleans are stored as 0/1 in SQLite. Return `level` and `total` (how many employees have `remote` = 1) per `level`, including groups with zero, ordered by `level`.

Tables: `employees` and `employee_events` (open the setup to see the data). Column names in SQL are snake_case.
