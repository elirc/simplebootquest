---
slug: "sql-hotels-top"
title: "SQL: Top 3 hotels by nightly price"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 hotels by nightly price

Return the `name` and `nightly_price` of the 3 hotels with the highest `nightly_price`. Break ties by `name`.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
