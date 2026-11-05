---
slug: "sql-tickets-join-sum"
title: "SQL: Total event amount per ticket"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Total event amount per ticket

Join `tickets` with `ticket_events` and return `subject` and `total` (the sum of `amount`) for tickets that have events, ordered by `total` descending, then `subject`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
