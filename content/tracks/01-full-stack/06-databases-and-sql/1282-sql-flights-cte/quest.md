---
slug: "sql-flights-cte"
title: "SQL: Airline groups above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Airline groups above the overall average

Using a CTE, compute the average `duration_min` per `airline`, then return the `airline`s whose average is above the overall average of `duration_min`, ordered by `airline`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
