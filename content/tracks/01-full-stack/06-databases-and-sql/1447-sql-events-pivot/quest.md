---
slug: "sql-events-pivot"
title: "SQL: Event kinds per event"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Event kinds per event

For every event that has events, return `name`, `views`, `likes` and `shares` (event counts per kind), ordered by `name`. Use conditional aggregation (`SUM(CASE …)`).

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
