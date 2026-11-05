---
slug: "sql-courses-cte"
title: "SQL: Levels above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Levels above the overall average

Using a CTE, compute the average `enrolled` per `level`, then return the `level`s whose average is above the overall average of `enrolled`, ordered by `level`.

Tables: `courses` and `course_events` (open the setup to see the data). Column names in SQL are snake_case.
