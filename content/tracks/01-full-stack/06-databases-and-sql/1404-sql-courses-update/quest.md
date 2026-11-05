---
slug: "sql-courses-update"
title: "SQL: Update courses in one level"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update courses in one level

Write an `UPDATE` that adds 10 to `enrolled` for every course whose `level` is 'advanced'. Nothing else may change.

Tables: `courses` and `course_events` (open the setup to see the data). Column names in SQL are snake_case.
