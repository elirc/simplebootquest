---
slug: "sql-transactions-join-sum"
title: "SQL: Total event amount per transaction"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Total event amount per transaction

Join `transactions` with `transaction_events` and return `reference` and `total` (the sum of `amount`) for transactions that have events, ordered by `total` descending, then `reference`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
