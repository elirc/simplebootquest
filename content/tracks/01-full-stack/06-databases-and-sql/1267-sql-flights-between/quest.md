---
slug: "sql-flights-between"
title: "SQL: Flights in a duration (minutes) range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Flights in a duration (minutes) range

Return the `number`s of flights with `duration_min` between 263 and 542 (inclusive), ordered by `duration_min`, then `number`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
