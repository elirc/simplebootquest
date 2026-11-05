---
slug: "sql-events-delete"
title: "SQL: Delete events below a registrations"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Delete events below a registrations

Delete every event whose `registered` is below 108 **and** that has no rows in `event_events` (never delete rows other tables reference).

Tables: `events` and `event_events` (open the setup to see the data). Column names in SQL are snake_case.
