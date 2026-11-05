---
slug: "sql-flights-above-avg"
title: "SQL: Flights above the average duration (minutes)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Flights above the average duration (minutes)

Return the `number`s of flights whose `duration_min` is above the overall average, ordered by `number`. Use a subquery.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
