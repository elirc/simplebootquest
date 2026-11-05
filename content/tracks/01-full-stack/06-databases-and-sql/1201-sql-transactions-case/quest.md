---
slug: "sql-transactions-case"
title: "SQL: Label transactions by amount"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label transactions by amount

Return `reference` and `band`: `'high'` when `amount` ≥ 942, `'low'` when it's below 460, otherwise `'medium'`. Order by `reference`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
