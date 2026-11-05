---
slug: "sql-courses-case"
title: "SQL: Label courses by enrolments"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label courses by enrolments

Return `title` and `band`: `'high'` when `enrolled` ≥ 4034, `'low'` when it's below 1519, otherwise `'medium'`. Order by `title`.

Tables: `courses` and `course_events` (open the setup to see the data). Column names in SQL are snake_case.
