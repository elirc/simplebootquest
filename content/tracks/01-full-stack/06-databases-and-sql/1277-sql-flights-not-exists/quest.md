---
slug: "sql-flights-not-exists"
title: "SQL: Flights with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Flights with no events

Return the `number`s of flights that have **no** rows in `flight_events`, ordered by `number`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
