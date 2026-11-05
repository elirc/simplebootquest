---
slug: "sql-cars-rank"
title: "SQL: Rank cars within each fuel type"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank cars within each fuel type

Return `fuel`, `model`, `price_k` and `rank`: the `RANK()` by `price_k` (highest first) **within each** `fuel`. Order by `fuel`, `rank`, `model`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
