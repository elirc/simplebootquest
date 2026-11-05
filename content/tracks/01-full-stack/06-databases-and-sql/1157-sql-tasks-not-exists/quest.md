---
slug: "sql-tasks-not-exists"
title: "SQL: Tasks with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Tasks with no events

Return the `title`s of tasks that have **no** rows in `task_events`, ordered by `title`.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
