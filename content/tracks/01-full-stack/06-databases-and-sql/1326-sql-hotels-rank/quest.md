---
slug: "sql-hotels-rank"
title: "SQL: Rank hotels within each city"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank hotels within each city

Return `city`, `name`, `nightly_price` and `rank`: the `RANK()` by `nightly_price` (highest first) **within each** `city`. Order by `city`, `rank`, `name`.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
