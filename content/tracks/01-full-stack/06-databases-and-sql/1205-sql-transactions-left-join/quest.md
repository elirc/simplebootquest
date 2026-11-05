---
slug: "sql-transactions-left-join"
title: "SQL: Event counts including zeros"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Event counts including zeros

Return `reference` and `events` (how many rows in `transaction_events`) for **every** transaction, including those with none. Order by `events` descending, then `reference`.

Tables: `transactions` and `transaction_events` (open the setup to see the data). Column names in SQL are snake_case.
