---
slug: "sql-events-cte"
title: "SQL: Formats above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Formats above the overall average

Using a CTE, compute the average `registered` per `format`, then return the `format`s whose average is above the overall average of `registered`, ordered by `format`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
