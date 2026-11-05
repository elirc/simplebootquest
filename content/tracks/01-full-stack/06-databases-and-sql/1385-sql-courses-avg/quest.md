---
slug: "sql-courses-avg"
title: "SQL: Average enrolments per level"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average enrolments per level

Return `level` and `avg_enrolled` (the average `enrolled` rounded to 1 decimal place) per `level`, ordered by `level`.

Tables: `courses` and `course_events` (open the setup to see the data). Column names in SQL are snake_case.
