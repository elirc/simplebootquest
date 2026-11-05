---
slug: "sql-tickets-having"
title: "SQL: Prioritys with several tickets"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Prioritys with several tickets

Return `priority` and `total` for groups that have **at least 2** tickets, ordered by `priority`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
