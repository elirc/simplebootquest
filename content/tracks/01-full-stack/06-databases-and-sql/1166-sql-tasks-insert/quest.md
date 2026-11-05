---
slug: "sql-tasks-insert"
title: "SQL: Insert a new task"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new task

Insert a task with id 100, `title` 'New task', `estimate` 9, `priority` 1, `assignee` 'ada', `status` 'todo', `blocked` 0. Then return how many tasks have that `assignee` as `total`.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
