---
slug: "sql-events-minmax"
title: "SQL: Range of registrations per format"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Range of registrations per format

Return `format`, `min_registered` and `max_registered` per `format`, ordered by `format`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
