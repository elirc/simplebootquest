---
slug: "sql-hotels-where"
title: "SQL: Hotels with nightly price above 275"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Hotels with nightly price above 275

Return the `name` and `nightly_price` of hotels whose `nightly_price` is greater than 275, ordered by `nightly_price` descending, then `name`.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
