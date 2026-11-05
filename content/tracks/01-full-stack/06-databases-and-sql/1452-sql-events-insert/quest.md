---
slug: "sql-events-insert"
title: "SQL: Insert a new event"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new event

Insert a event with id 100, `name` 'New event', `registered` 138, `capacity` 20, `format` 'hybrid', `free` 0. Then return how many events have that `format` as `total`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
