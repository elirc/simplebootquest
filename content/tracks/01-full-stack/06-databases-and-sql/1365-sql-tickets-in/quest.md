---
slug: "sql-tickets-in"
title: "SQL: Tickets in some prioritys"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Tickets in some prioritys

Return `id` and `subject` of tickets whose `priority` is 'low' or 'normal', ordered by `id`. Use `IN`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
