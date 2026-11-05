---
slug: "sql-cars-between"
title: "SQL: Cars in a price (thousands) range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Cars in a price (thousands) range

Return the `model`s of cars with `price_k` between 35 and 47 (inclusive), ordered by `price_k`, then `model`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
