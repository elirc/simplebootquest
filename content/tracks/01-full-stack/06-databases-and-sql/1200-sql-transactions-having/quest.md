---
slug: "sql-transactions-having"
title: "SQL: Categorys with several transactions"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Categorys with several transactions

Return `category` and `total` for groups that have **at least 2** transactions, ordered by `category`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
