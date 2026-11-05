---
slug: "sql-tasks-update"
title: "SQL: Update tasks in one assignee"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update tasks in one assignee

Write an `UPDATE` that adds 10 to `estimate` for every task whose `assignee` is 'ada'. Nothing else may change.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
