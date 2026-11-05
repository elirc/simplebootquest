---
slug: "sql-tasks-where"
title: "SQL: Tasks with estimate (hours) above 9"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Tasks with estimate (hours) above 9

Return the `title` and `estimate` of tasks whose `estimate` is greater than 9, ordered by `estimate` descending, then `title`.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
