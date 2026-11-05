---
slug: "sql-events-between"
title: "SQL: Events in a registrations range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Events in a registrations range

Return the `name`s of events with `registered` between 108 and 247 (inclusive), ordered by `registered`, then `name`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
