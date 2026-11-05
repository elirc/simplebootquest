---
slug: "sql-cars-update"
title: "SQL: Update cars in one fuel type"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update cars in one fuel type

Write an `UPDATE` that adds 10 to `price_k` for every car whose `fuel` is 'diesel'. Nothing else may change.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
