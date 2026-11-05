---
slug: "sql-flights-update"
title: "SQL: Update flights in one airline group"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update flights in one airline group

Write an `UPDATE` that adds 10 to `duration_min` for every flight whose `airline` is 'oneworld'. Nothing else may change.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
