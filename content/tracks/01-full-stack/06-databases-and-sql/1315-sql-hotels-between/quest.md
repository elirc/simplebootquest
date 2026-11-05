---
slug: "sql-hotels-between"
title: "SQL: Hotels in a nightly price range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Hotels in a nightly price range

Return the `name`s of hotels with `nightly_price` between 258 and 384 (inclusive), ordered by `nightly_price`, then `name`.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
