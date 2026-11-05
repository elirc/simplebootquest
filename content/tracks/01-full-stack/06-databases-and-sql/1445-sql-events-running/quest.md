---
slug: "sql-events-running"
title: "SQL: Running total of registrations"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Running total of registrations

Return `id`, `registered` and `running_total`: the cumulative sum of `registered` ordered by `id`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
