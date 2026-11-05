---
slug: "sql-hotels-update"
title: "SQL: Update hotels in one city"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update hotels in one city

Write an `UPDATE` that adds 10 to `nightly_price` for every hotel whose `city` is 'Kyoto'. Nothing else may change.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
