---
slug: "sql-tasks-count"
title: "SQL: Count tasks per assignee"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count tasks per assignee

Return `assignee` and `total` (the number of tasks) for each `assignee`, ordered by `total` descending, then `assignee`.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
