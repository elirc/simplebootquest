---
slug: "sql-courses-above-avg"
title: "SQL: Courses above the average enrolments"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Courses above the average enrolments

Return the `title`s of courses whose `enrolled` is above the overall average, ordered by `title`. Use a subquery.

Tables: `courses` and `course_events` (open the setup to see the data). Column names in SQL are snake_case.
