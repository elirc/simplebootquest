---
slug: "sql-students-running"
title: "SQL: Running total of age"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Running total of age

Return `id`, `age` and `running_total`: the cumulative sum of `age` ordered by `id`.

Tables: `students` and `student_events` (open the setup to see the data). Column names in SQL are snake_case.
