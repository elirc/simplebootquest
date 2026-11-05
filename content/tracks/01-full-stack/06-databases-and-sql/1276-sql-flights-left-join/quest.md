---
slug: "sql-flights-left-join"
title: "SQL: Event counts including zeros"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Event counts including zeros

Return `number` and `events` (how many rows in `flight_events`) for **every** flight, including those with none. Order by `events` descending, then `number`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
