---
slug: "sql-tasks-rank"
title: "SQL: Rank tasks within each assignee"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank tasks within each assignee

Return `assignee`, `title`, `estimate` and `rank`: the `RANK()` by `estimate` (highest first) **within each** `assignee`. Order by `assignee`, `rank`, `title`.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
