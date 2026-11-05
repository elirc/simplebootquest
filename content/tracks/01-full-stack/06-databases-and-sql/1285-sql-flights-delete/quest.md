---
slug: "sql-flights-delete"
title: "SQL: Delete flights below a duration (minutes)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Delete flights below a duration (minutes)

Delete every flight whose `duration_min` is below 263 **and** that has no rows in `flight_events` (never delete rows other tables reference).

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
