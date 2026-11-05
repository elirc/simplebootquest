---
slug: "sql-hotels-join-sum"
title: "SQL: Total event amount per hotel"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Total event amount per hotel

Join `hotels` with `hotel_events` and return `name` and `total` (the sum of `amount`) for hotels that have events, ordered by `total` descending, then `name`.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
