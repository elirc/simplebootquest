---
slug: "sql-flights-where"
title: "SQL: Flights with duration (minutes) above 459"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Flights with duration (minutes) above 459

Return the `number` and `duration_min` of flights whose `duration_min` is greater than 459, ordered by `duration_min` descending, then `number`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
