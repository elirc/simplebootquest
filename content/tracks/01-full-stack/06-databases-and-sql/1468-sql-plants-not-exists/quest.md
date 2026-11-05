---
slug: "sql-plants-not-exists"
title: "SQL: Plants with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Plants with no events

Return the `name`s of plants that have **no** rows in `plant_events`, ordered by `name`.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
