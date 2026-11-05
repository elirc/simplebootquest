---
slug: "sql-cars-in"
title: "SQL: Cars in some fuel types"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Cars in some fuel types

Return `id` and `model` of cars whose `fuel` is 'diesel' or 'electric', ordered by `id`. Use `IN`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
