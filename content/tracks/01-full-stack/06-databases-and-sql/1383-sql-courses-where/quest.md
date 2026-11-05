---
slug: "sql-courses-where"
title: "SQL: Courses with enrolments above 2467"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Courses with enrolments above 2467

Return the `title` and `enrolled` of courses whose `enrolled` is greater than 2467, ordered by `enrolled` descending, then `title`.

Tables: `courses` and `course_events` (open the setup to see the data). Column names in SQL are snake_case.
