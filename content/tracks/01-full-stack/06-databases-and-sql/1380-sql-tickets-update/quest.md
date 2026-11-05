---
slug: "sql-tickets-update"
title: "SQL: Update tickets in one priority"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update tickets in one priority

Write an `UPDATE` that adds 10 to `replies` for every ticket whose `priority` is 'low'. Nothing else may change.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
