---
slug: "sql-cars-top"
title: "SQL: Top 3 cars by price (thousands)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 cars by price (thousands)

Return the `model` and `price_k` of the 3 cars with the highest `price_k`. Break ties by `model`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
