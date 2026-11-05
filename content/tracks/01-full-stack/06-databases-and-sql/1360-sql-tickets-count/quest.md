---
slug: "sql-tickets-count"
title: "SQL: Count tickets per priority"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count tickets per priority

Return `priority` and `total` (the number of tickets) for each `priority`, ordered by `total` descending, then `priority`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
