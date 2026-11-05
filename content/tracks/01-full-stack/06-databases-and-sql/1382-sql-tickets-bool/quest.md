---
slug: "sql-tickets-bool"
title: "SQL: Count resolved tickets"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count resolved tickets

Booleans are stored as 0/1 in SQLite. Return `priority` and `total` (how many tickets have `resolved` = 1) per `priority`, including groups with zero, ordered by `priority`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
