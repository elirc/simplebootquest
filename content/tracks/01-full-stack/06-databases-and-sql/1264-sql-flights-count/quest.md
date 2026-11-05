---
slug: "sql-flights-count"
title: "SQL: Count flights per airline group"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count flights per airline group

Return `airline` and `total` (the number of flights) for each `airline`, ordered by `total` descending, then `airline`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
