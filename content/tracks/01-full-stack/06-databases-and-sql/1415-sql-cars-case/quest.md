---
slug: "sql-cars-case"
title: "SQL: Label cars by price (thousands)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label cars by price (thousands)

Return `model` and `band`: `'high'` when `price_k` ≥ 47, `'low'` when it's below 35, otherwise `'medium'`. Order by `model`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
