---
slug: "sql-tickets-insert"
title: "SQL: Insert a new ticket"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new ticket

Insert a ticket with id 100, `subject` 'New ticket', `replies` 5, `age_hours` 1, `priority` 'low', `channel` 'email', `resolved` 0. Then return how many tickets have that `priority` as `total`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
