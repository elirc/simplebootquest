---
slug: "sql-tasks-avg"
title: "SQL: Average estimate (hours) per assignee"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average estimate (hours) per assignee

Return `assignee` and `avg_estimate` (the average `estimate` rounded to 1 decimal place) per `assignee`, ordered by `assignee`.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
