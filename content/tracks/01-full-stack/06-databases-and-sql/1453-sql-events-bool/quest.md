---
slug: "sql-events-bool"
title: "SQL: Count free events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count free events

Booleans are stored as 0/1 in SQLite. Return `format` and `total` (how many events have `free` = 1) per `format`, including groups with zero, ordered by `format`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
