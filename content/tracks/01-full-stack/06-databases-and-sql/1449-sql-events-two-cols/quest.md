---
slug: "sql-events-two-cols"
title: "SQL: Sort by two columns"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Sort by two columns

Return `name`, `registered` and `capacity`, ordered by `capacity` ascending, then `registered` descending, then `name`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
