---
slug: "sql-hotels-insert"
title: "SQL: Insert a new hotel"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new hotel

Insert a hotel with id 100, `name` 'New hotel', `nightly_price` 275, `stars` 1, `city` 'Kyoto', `breakfast` 0. Then return how many hotels have that `city` as `total`.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
