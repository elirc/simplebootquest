---
slug: "sql-transactions-update"
title: "SQL: Update transactions in one category"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update transactions in one category

Write an `UPDATE` that adds 10 to `amount` for every transaction whose `category` is 'fun'. Nothing else may change.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
