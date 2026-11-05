---
slug: "sql-students-case"
title: "SQL: Label students by age"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label students by age

Return `name` and `band`: `'high'` when `age` ≥ 30, `'low'` when it's below 24, otherwise `'medium'`. Order by `name`.

Tables: `students` and `student_events` (open the setup to see the data). Column names in SQL are snake_case.
