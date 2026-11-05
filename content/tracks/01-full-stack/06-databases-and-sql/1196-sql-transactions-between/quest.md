---
slug: "sql-transactions-between"
title: "SQL: Transactions in a amount range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Transactions in a amount range

Return the `reference`s of transactions with `amount` between 460 and 942 (inclusive), ordered by `amount`, then `reference`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
