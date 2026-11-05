---
slug: "sql-events-where"
title: "SQL: Events with registrations above 138"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Events with registrations above 138

Return the `name` and `registered` of events whose `registered` is greater than 138, ordered by `registered` descending, then `name`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
