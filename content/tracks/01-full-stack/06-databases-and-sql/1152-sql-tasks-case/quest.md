---
slug: "sql-tasks-case"
title: "SQL: Label tasks by estimate (hours)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label tasks by estimate (hours)

Return `title` and `band`: `'high'` when `estimate` ≥ 11, `'low'` when it's below 3, otherwise `'medium'`. Order by `title`.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
