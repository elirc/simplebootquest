---
slug: "sql-tickets-not-exists"
title: "SQL: Tickets with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Tickets with no events

Return the `subject`s of tickets that have **no** rows in `ticket_events`, ordered by `subject`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
