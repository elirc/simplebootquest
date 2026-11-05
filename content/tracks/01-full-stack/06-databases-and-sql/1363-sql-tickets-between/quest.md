---
slug: "sql-tickets-between"
title: "SQL: Tickets in a reply count range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Tickets in a reply count range

Return the `subject`s of tickets with `replies` between 4 and 8 (inclusive), ordered by `replies`, then `subject`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
