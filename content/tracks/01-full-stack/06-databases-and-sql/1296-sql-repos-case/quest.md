---
slug: "sql-repos-case"
title: "SQL: Label repos by open issues"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label repos by open issues

Return `name` and `band`: `'high'` when `open_issues` ≥ 121, `'low'` when it's below 67, otherwise `'medium'`. Order by `name`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
