---
slug: "sql-students-cte"
title: "SQL: Courses above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Courses above the overall average

Using a CTE, compute the average `age` per `course`, then return the `course`s whose average is above the overall average of `age`, ordered by `course`.

Tables: `students` and `student_events` (open the setup to see the data). Column names in SQL are snake_case.
