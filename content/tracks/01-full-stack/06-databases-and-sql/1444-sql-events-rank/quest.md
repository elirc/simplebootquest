---
slug: "sql-events-rank"
title: "SQL: Rank events within each format"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank events within each format

Return `format`, `name`, `registered` and `rank`: the `RANK()` by `registered` (highest first) **within each** `format`. Order by `format`, `rank`, `name`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
