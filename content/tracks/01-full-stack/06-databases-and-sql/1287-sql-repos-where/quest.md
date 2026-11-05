---
slug: "sql-repos-where"
title: "SQL: Repos with open issues above 87"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Repos with open issues above 87

Return the `name` and `open_issues` of repos whose `open_issues` is greater than 87, ordered by `open_issues` descending, then `name`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
