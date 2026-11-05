---
slug: "sql-tickets-cte"
title: "SQL: Prioritys above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Prioritys above the overall average

Using a CTE, compute the average `replies` per `priority`, then return the `priority`s whose average is above the overall average of `replies`, ordered by `priority`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
