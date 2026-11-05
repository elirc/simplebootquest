---
slug: "sql-repos-above-avg"
title: "SQL: Repos above the average open issues"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Repos above the average open issues

Return the `name`s of repos whose `open_issues` is above the overall average, ordered by `name`. Use a subquery.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
