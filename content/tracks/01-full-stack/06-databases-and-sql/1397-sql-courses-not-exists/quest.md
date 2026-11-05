---
slug: "sql-courses-not-exists"
title: "SQL: Courses with no events"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Courses with no events

Return the `title`s of courses that have **no** rows in `course_events`, ordered by `title`.

Tables: `courses` and `course_events` (open the setup to see the data). Column names in SQL are snake_case.
