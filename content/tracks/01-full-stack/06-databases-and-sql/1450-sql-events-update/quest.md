---
slug: "sql-events-update"
title: "SQL: Update events in one format"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update events in one format

Write an `UPDATE` that adds 10 to `registered` for every event whose `format` is 'hybrid'. Nothing else may change.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
