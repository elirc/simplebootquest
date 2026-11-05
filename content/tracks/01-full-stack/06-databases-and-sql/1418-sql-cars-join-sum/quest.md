---
slug: "sql-cars-join-sum"
title: "SQL: Total event amount per car"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Total event amount per car

Join `cars` with `car_events` and return `model` and `total` (the sum of `amount`) for cars that have events, ordered by `total` descending, then `model`.

Tables: `cars` and `car_events` (open the setup to see the data). Column names in SQL are snake_case.
