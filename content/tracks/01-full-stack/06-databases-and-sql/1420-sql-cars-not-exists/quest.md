---
slug: "sql-cars-not-exists"
title: "SQL: Cars with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Cars with no events

Return the `model`s of cars that have **no** rows in `car_events`, ordered by `model`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
