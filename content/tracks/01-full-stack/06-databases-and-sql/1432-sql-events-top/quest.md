---
slug: "sql-events-top"
title: "SQL: Top 3 events by registrations"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 events by registrations

Return the `name` and `registered` of the 3 events with the highest `registered`. Break ties by `name`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
