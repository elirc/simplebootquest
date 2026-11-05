---
slug: "sql-tasks-top"
title: "SQL: Top 3 tasks by estimate (hours)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 tasks by estimate (hours)

Return the `title` and `estimate` of the 3 tasks with the highest `estimate`. Break ties by `title`.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
