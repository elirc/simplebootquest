---
slug: "sql-transactions-not-exists"
title: "SQL: Transactions with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Transactions with no events

Return the `reference`s of transactions that have **no** rows in `transaction_events`, ordered by `reference`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
