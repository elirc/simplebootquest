---
slug: "sql-tickets-top"
title: "SQL: Top 3 tickets by reply count"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 tickets by reply count

Return the `subject` and `replies` of the 3 tickets with the highest `replies`. Break ties by `subject`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
