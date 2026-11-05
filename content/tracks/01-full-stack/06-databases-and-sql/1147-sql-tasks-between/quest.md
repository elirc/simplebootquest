---
slug: "sql-tasks-between"
title: "SQL: Tasks in a estimate (hours) range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Tasks in a estimate (hours) range

Return the `title`s of tasks with `estimate` between 3 and 11 (inclusive), ordered by `estimate`, then `title`.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
