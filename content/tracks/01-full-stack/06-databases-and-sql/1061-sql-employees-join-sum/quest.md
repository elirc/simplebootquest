---
slug: "sql-employees-join-sum"
title: "SQL: Total event amount per employee"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Total event amount per employee

Join `employees` with `employee_events` and return `name` and `total` (the sum of `amount`) for employees that have events, ordered by `total` descending, then `name`.

Tables: `employees` and `employee_events` (open the setup to see the data). Column names in SQL are snake_case.
