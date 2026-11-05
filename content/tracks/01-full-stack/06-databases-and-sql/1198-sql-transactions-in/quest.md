---
slug: "sql-transactions-in"
title: "SQL: Transactions in some categorys"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Transactions in some categorys

Return `id` and `reference` of transactions whose `category` is 'fun' or 'rent', ordered by `id`. Use `IN`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
