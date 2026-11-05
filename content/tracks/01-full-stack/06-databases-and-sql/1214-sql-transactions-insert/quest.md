---
slug: "sql-transactions-insert"
title: "SQL: Insert a new transaction"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new transaction

Insert a transaction with id 100, `reference` 'New transaction', `amount` 648, `day` 1, `category` 'fun'. Then return how many transactions have that `category` as `total`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
