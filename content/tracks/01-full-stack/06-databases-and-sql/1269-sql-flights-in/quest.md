---
slug: "sql-flights-in"
title: "SQL: Flights in some airline groups"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Flights in some airline groups

Return `id` and `number` of flights whose `airline` is 'oneworld' or 'skyteam', ordered by `id`. Use `IN`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
