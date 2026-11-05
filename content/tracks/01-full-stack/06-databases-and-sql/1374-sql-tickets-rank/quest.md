---
slug: "sql-tickets-rank"
title: "SQL: Rank tickets within each priority"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank tickets within each priority

Return `priority`, `subject`, `replies` and `rank`: the `RANK()` by `replies` (highest first) **within each** `priority`. Order by `priority`, `rank`, `subject`.

Tables: `tickets` and `ticket_events` (open the setup to see the data). Column names in SQL are snake_case.
