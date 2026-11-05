---
slug: "sql-students-rank"
title: "SQL: Rank students within each course"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank students within each course

Return `course`, `name`, `age` and `rank`: the `RANK()` by `age` (highest first) **within each** `course`. Order by `course`, `rank`, `name`.

Tables: `students` and `student_events` (open the setup to see the data). Column names in SQL are snake_case.
