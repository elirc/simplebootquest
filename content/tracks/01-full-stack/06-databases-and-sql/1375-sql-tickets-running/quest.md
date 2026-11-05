---
slug: "sql-tickets-running"
title: "SQL: Running total of reply count"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Running total of reply count

Return `id`, `replies` and `running_total`: the cumulative sum of `replies` ordered by `id`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
