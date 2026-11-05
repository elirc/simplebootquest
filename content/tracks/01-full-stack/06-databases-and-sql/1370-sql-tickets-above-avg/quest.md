---
slug: "sql-tickets-above-avg"
title: "SQL: Tickets above the average reply count"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Tickets above the average reply count

Return the `subject`s of tickets whose `replies` is above the overall average, ordered by `subject`. Use a subquery.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
