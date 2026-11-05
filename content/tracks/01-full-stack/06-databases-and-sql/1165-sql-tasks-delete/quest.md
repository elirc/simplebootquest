---
slug: "sql-tasks-delete"
title: "SQL: Delete tasks below a estimate (hours)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Delete tasks below a estimate (hours)

Delete every task whose `estimate` is below 3 **and** that has no rows in `task_events` (never delete rows other tables reference).

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
