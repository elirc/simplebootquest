---
slug: "sql-transactions-above-avg"
title: "SQL: Transactions above the average amount"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Transactions above the average amount

Return the `reference`s of transactions whose `amount` is above the overall average, ordered by `reference`. Use a subquery.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
