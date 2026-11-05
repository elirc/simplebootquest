---
slug: "sql-events-case"
title: "SQL: Label events by registrations"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label events by registrations

Return `name` and `band`: `'high'` when `registered` ≥ 247, `'low'` when it's below 108, otherwise `'medium'`. Order by `name`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
