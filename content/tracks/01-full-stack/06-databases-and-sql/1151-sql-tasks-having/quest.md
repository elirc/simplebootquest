---
slug: "sql-tasks-having"
title: "SQL: Assignees with several tasks"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Assignees with several tasks

Return `assignee` and `total` for groups that have **at least 2** tasks, ordered by `assignee`.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
