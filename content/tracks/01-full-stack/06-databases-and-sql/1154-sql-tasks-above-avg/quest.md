---
slug: "sql-tasks-above-avg"
title: "SQL: Tasks above the average estimate (hours)"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Tasks above the average estimate (hours)

Return the `title`s of tasks whose `estimate` is above the overall average, ordered by `title`. Use a subquery.

Tables: `tasks` and `task_events` (open the setup to see the data). Column names in SQL are snake_case.
