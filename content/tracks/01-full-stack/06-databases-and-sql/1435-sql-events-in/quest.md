---
slug: "sql-events-in"
title: "SQL: Events in some formats"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Events in some formats

Return `id` and `name` of events whose `format` is 'hybrid' or 'in-person', ordered by `id`. Use `IN`.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
