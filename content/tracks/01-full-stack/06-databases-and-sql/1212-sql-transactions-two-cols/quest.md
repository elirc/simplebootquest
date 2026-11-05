---
slug: "sql-transactions-two-cols"
title: "SQL: Sort by two columns"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Sort by two columns

Return `reference`, `amount` and `day`, ordered by `day` ascending, then `amount` descending, then `reference`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
