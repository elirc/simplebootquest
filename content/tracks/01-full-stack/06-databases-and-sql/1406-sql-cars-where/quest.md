---
slug: "sql-cars-where"
title: "SQL: Cars with price (thousands) above 40"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Cars with price (thousands) above 40

Return the `model` and `price_k` of cars whose `price_k` is greater than 40, ordered by `price_k` descending, then `model`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
