---
slug: "sql-students-bool"
title: "SQL: Count graduated students"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count graduated students

Booleans are stored as 0/1 in SQLite. Return `course` and `total` (how many students have `graduated` = 1) per `course`, including groups with zero, ordered by `course`.

Tables: `students` and `student_events` (open the setup to see the data). Column names in SQL are snake_case.
