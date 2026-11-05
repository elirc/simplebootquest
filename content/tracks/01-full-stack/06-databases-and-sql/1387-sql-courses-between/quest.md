---
slug: "sql-courses-between"
title: "SQL: Courses in a enrolments range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Courses in a enrolments range

Return the `title`s of courses with `enrolled` between 1519 and 4034 (inclusive), ordered by `enrolled`, then `title`.

Tables: `courses` and `course_events` (open the setup to see the data). Column names in SQL are snake_case.
