---
slug: "sql-tickets-avg"
title: "SQL: Average reply count per priority"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average reply count per priority

Return `priority` and `avg_replies` (the average `replies` rounded to 1 decimal place) per `priority`, ordered by `priority`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
