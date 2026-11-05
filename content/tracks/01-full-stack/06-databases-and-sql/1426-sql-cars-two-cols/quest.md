---
slug: "sql-cars-two-cols"
title: "SQL: Sort by two columns"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Sort by two columns

Return `model`, `price_k` and `km`, ordered by `km` ascending, then `price_k` descending, then `model`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
