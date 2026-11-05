---
slug: "sql-tickets-where"
title: "SQL: Tickets with reply count above 5"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Tickets with reply count above 5

Return the `subject` and `replies` of tickets whose `replies` is greater than 5, ordered by `replies` descending, then `subject`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
