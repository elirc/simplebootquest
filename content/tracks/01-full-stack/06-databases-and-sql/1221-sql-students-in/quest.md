---
slug: "sql-students-in"
title: "SQL: Students in some courses"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Students in some courses

Return `id` and `name` of students whose `course` is 'data' or 'design', ordered by `id`. Use `IN`.

Tables: `students` and `student_events` (open the setup to see the data). Column names in SQL are snake_case.
