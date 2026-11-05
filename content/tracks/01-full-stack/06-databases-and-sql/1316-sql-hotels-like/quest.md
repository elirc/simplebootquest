---
slug: "sql-hotels-like"
title: "SQL: Search hotels by name"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Search hotels by name

Return the `name`s that contain "ap" (case-insensitive in SQLite's `LIKE` for ASCII), ordered alphabetically.

Tables: `hotels` and `hotel_events` (open the setup to see the data). Column names in SQL are snake_case.
