---
slug: "sql-transactions-where"
title: "SQL: Transactions with amount above 648"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Transactions with amount above 648

Return the `reference` and `amount` of transactions whose `amount` is greater than 648, ordered by `amount` descending, then `reference`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
