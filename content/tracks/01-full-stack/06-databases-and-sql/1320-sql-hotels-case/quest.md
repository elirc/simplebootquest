---
slug: "sql-hotels-case"
title: "SQL: Label hotels by nightly price"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label hotels by nightly price

Return `name` and `band`: `'high'` when `nightly_price` ≥ 384, `'low'` when it's below 258, otherwise `'medium'`. Order by `name`.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
