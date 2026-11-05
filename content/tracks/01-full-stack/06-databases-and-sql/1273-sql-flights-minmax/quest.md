---
slug: "sql-flights-minmax"
title: "SQL: Range of duration (minutes) per airline group"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Range of duration (minutes) per airline group

Return `airline`, `min_duration_min` and `max_duration_min` per `airline`, ordered by `airline`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
