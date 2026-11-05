---
slug: "sql-hotels-avg"
title: "SQL: Average nightly price per city"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average nightly price per city

Return `city` and `avg_nightly_price` (the average `nightly_price` rounded to 1 decimal place) per `city`, ordered by `city`.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
