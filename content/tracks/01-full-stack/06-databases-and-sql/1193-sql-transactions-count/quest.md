---
slug: "sql-transactions-count"
title: "SQL: Count transactions per category"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count transactions per category

Return `category` and `total` (the number of transactions) for each `category`, ordered by `total` descending, then `category`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
