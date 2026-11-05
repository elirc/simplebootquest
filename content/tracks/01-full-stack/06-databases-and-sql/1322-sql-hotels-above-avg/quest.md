---
slug: "sql-hotels-above-avg"
title: "SQL: Hotels above the average nightly price"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Hotels above the average nightly price

Return the `name`s of hotels whose `nightly_price` is above the overall average, ordered by `name`. Use a subquery.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
