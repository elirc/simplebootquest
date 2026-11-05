---
slug: "sql-flights-insert"
title: "SQL: Insert a new flight"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new flight

Insert a flight with id 100, `number` 'New flight', `duration_min` 459, `delay_min` 0, `seats` 0, `airline` 'oneworld'. Then return how many flights have that `airline` as `total`.

Tables: `flights` and `flight_events` (open the setup to see the data). Column names in SQL are snake_case.
