---
slug: "sql-events-above-avg"
title: "SQL: Events above the average registrations"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Events above the average registrations

Return the `name`s of events whose `registered` is above the overall average, ordered by `name`. Use a subquery.

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
